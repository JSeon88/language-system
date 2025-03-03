import { defineEventHandler } from 'h3'
import prisma from '../db/prisma'

export default defineEventHandler(async () => {
  try {
    // 데이터베이스에서 모든 사용자 레코드를 조회합니다.
    const users = await prisma.user.findMany()
    return { success: true, data: users }
  } catch (error: any) {
    // 에러가 발생하면 에러 메시지를 반환합니다.
    return { success: false, error: error.message }
  }
});
