import { defineEventHandler } from 'h3'
import fs from 'fs'
import path from 'path'
import { Readable } from 'stream'
import { createRequire } from 'module'

const require = createRequire(import.meta.url)
const Busboy = require('busboy')

export default defineEventHandler(async (event) => {
  const req = event.node.req
  const uploadDir = path.resolve('uploads')

  // 업로드 폴더가 없으면 생성
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true })
  }

  return new Promise((resolve, reject) => {
    const busboy = Busboy({ headers: req.headers })

    busboy.on(
      'file',
      (
        fieldname: string,
        file: Readable,
        filename: {
            filename: string,
            encoding: string,
            mimetype: string
        },
        _encoding: string,
        _mimetype: string
      ) => {
        console.log('Received filename:', filename, 'type:', typeof filename)
        // filename이 문자열인지 확인하고, 아니라면 문자열로 변환합니다.
        
        const saveTo = path.join(uploadDir, filename.filename)
        const writeStream = fs.createWriteStream(saveTo)
        file.pipe(writeStream)

        writeStream.on('close', () => {
          console.log(
            `File [${fieldname}]: ${filename.filename} saved to ${saveTo}`
          )
        })
      }
    )

    busboy.on('finish', () => {
      resolve({ success: true, message: 'File uploaded successfully' })
    })

    busboy.on('error', (err: Error) => {
      reject(err)
    })

    req.pipe(busboy)
  })
})
