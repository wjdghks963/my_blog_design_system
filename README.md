# 블로그 디자인 시스템 with StoryBook

- [chromatic 링크 ](https://63635e18291535f4d01657be-csrykgcgxo.chromatic.com/?path=/story/components-base-headerli--normal)

## Story 로 둘 것들

1. 공통적으로 2번 이상 사용된 component
2. 일반 component
3. 일반 page 

1번 경우 이벤트 발생시 action이 나와야하지만 컴포넌트 사용이 한정적이었고 안에서 로직을 처리하기 때문에  action은 포함되지 않음
2번 경우 일반적으로 1번밖에 사용되지 않았거나 고칠일이 없을 경우라도 className을 이용하여 스타일을 바꿀 수 있는 경우 포함함
3번 처음 사용하기 때문에 사용법이나 decorator를 사용해보기 위해 넣음

## 사용한 addon

```javascript
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-docs",
    "@storybook/addon-actions",
    "@storybook/addon-postcss",
    "storybook-tailwind-dark-mode",
    "react-docgen"
```

## 배포 

https://storybook.js.org/tutorials/intro-to-storybook/react/ko/deploy/

storybook 공식 문서를 따르고 storybook을 위해서 만들어진 chromatic를 사용함

`npm run chromatic`을 이용해 publish 하지만 github CI 활용 연습을 위해 github action 추가
