# UI Components

## Button Component

Buttons are used for actions and form submissions.

### Basic Usage
```vue
<template>
  <Button variant="primary">Click me</Button>
  <Button variant="secondary" disabled>Disabled</Button>
</template>
```

### API Reference
| Prop     | Type    | Default   | Description           |
|----------|---------|-----------|------------------------|
| variant  | String  | 'primary' | Button style variant   |
| disabled | Boolean | false     | Disable button state   |
| size     | String  | 'medium'  | Button size           |

## Form Components

### Input Field
```vue
<template>
  <Input
    v-model="value"
    label="Username"
    placeholder="Enter username"
    :error="error"
  />
</template>
```

### API Reference
| Prop        | Type    | Default | Description           |
|-------------|---------|---------|------------------------|
| modelValue  | String  | ''      | Input value           |
| label       | String  | ''      | Input label           |
| error       | String  | ''      | Error message         |
| placeholder | String  | ''      | Input placeholder     |