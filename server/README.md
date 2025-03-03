# 폴더 구조 설명
```
├── server/               
│   ├── api/              # Nitro API 엔드포인트
│   │   └── users.get.ts      # API 사용 예제
│   └── db/               # 데이터베이스 관련 코드 (예: Prisma Client 초기화)
│       └── prisma.ts     # Prisma 클라이언트 인스턴스 (재사용 가능하도록)
└──prisma/               # Prisma 스키마와 마이그레이션 파일
    └── schema.prisma

```

# prisma
## DB
- mariaDB

## studio 사용하여 데이터 확인
```
npx prisma studio
```
혹은 nuxt dev tool을 사용하여 데이터 확인 가능