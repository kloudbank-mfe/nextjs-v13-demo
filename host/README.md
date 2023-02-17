## Host app. Introduction

Host app. 주요 사용 module
- next
- nextjs-mf
- antd
- swr

# Next.js module federation
- Layout container loading 을 위한 remote 정의

```js
const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    remote: `remote@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
};
```

# Next.js layout 적용

`app` directory 사용 없이, `pages` 기반 page 및 layout 구성

## Layout (Host / Remote)
- Host app. 내 자체 layout 적용
  - Header / Sidebar 등을 app. 에 직접 구성하거나, app. 자체 기본 layout 구성 시 활용
  - [](./pages/layout.js)
- Remote LayoutContainer loading
  - Remote app. 에서 제공하는 layout 활용 가능
  - [](./pages/remoteLayout.js)

## Page 에 Layout 적용
- layout 에 page 를 prop 으로 넘겨주는 방식으로 각 page 에 적용
- 각 page 에 `getLayout` code 작성 필요
```js
...
Home.getLayout = function getLayout(page) {
  return (
    <>
      <AppLayout>{page}</AppLayout>
      <RemoteAppLayout>{page}</RemoteAppLayout>
    </>
  )
}
...
```

# Sample Pages

Ant Design component 활용하여 개발 

- botkube
  - botkube 수집 data json file 로 생성.
  - Paging 처리
    - `http://localhost:3000/botkube/pagination`
  - Virtual list
    - `http://localhost:3000/botkube/pagination`
- userinfo
  - user info sample data json file 로 생성
    - Paging 처리
    - Date Picker range 검색
    - keyword 검색
    - Action 적용 (Edit / Delete)
    - `http://localhost:3000/userinfo/pagination`

