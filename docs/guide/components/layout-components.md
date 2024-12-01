# Layout Components

## Grid System

Our grid system is built on CSS Grid and provides flexible layout options.

### Basic Grid
```vue
<template>
  <Grid columns="3" gap="4">
    <GridItem>Content 1</GridItem>
    <GridItem>Content 2</GridItem>
    <GridItem>Content 3</GridItem>
  </Grid>
</template>
```

### API Reference
| Prop    | Type           | Default | Description        |
|---------|----------------|---------|-------------------|
| columns | Number/String  | 12      | Number of columns |
| gap     | Number/String  | 4       | Grid gap size     |
| align   | String        | 'start' | Alignment         |

## Container

Container component for consistent page widths.

### Usage
```vue
<template>
  <Container size="lg">
    <h1>Page Content</h1>
    <p>Contained within max-width</p>
  </Container>
</template>
```

### API Reference
| Prop | Type   | Default | Description      |
|------|--------|---------|------------------|
| size | String | 'md'    | Container size   |
| fluid| Boolean| false   | Full-width mode  |