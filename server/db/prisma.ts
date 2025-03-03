import { PrismaClient } from '@prisma/client'

// 글로벌 타입에 prisma 속성을 추가 (개발 환경에서 재사용하기 위함)
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

// 글로벌 변수에 이미 Prisma 인스턴스가 있다면 재사용하고,
// 없다면 새롭게 생성합니다.
const prisma = global.prisma || new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma