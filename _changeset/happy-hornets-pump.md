---
"@pankod/refine-core": minor
---

Add an option to hide `resources` from the `Sider` menu

```tsx
<Refine
    ...
    ...
    resources={[
        {
            name: "posts",
            list: PostList,
            options: {
                hide: true,
            },
        },
    ]}
/>
```