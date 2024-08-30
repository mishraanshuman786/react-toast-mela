# react-toast-mela

Free React Toast Package to use in Any React Projects to Implement Beautiful Toasts.

---

# `react-toast-mela`

`react-toast-mela` is a lightweight and customizable toast notification component for React applications. It provides a simple way to display brief messages to users.

## Table of Contents

- Installation
- Usage
- Props
- Customization
- Example
- License

## Installation

You can install `react-toast-mela` using npm or yarn:

bash

Copy code

`npm install react-toast-mela`

or

bash

Copy code

`yarn add react-toast-mela`

## Usage

To use `react-toast-mela`, follow these steps:

1.  **Import the Toast component:**

    jsx

    Copy code

    `import Toast from 'react-toast-mela';`

2.  **Render the Toast component in your application:**

    You need to manage the state of the toast message and its visibility. Here’s a simple example:

    jsx

    Copy code

    `import React, { useState } from 'react';
    import Toast from 'react-toast-mela';

    const App = () => {
    const [showToast, setShowToast] = useState(false);

    const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000); // Hide toast after 3 seconds
    };

    return (
    <div>
    <button onClick={handleShowToast}>Show Toast</button>
    {showToast && <Toast message="Hello, World!" />}
    </div>
    );
    };

    export default App;`

## Props

The `Toast` component accepts the following props:

- **`message`** (string): The message to display in the toast. This is a required prop.
- **`duration`** (number): The duration (in milliseconds) for which the toast will be visible. Default is `3000` ms.
- **`onClose`** (function): A callback function that is called when the toast is closed.

### Example

jsx

Copy code

`<Toast 
  message="This is a custom toast message!" 
  duration={5000} 
  onClose={() => console.log('Toast closed')} 
/>`

## Customization

You can customize the appearance of the toast by overriding the inline styles provided in the `Toast` component. For example:

jsx

Copy code

`<Toast 
  message="Custom styled toast!" 
  style={{ backgroundColor: 'blue', color: 'yellow', padding: '15px' }} 
/>`

## Example

Here’s a more detailed example showing different ways to use and customize the `Toast` component:

jsx

Copy code

`import React, { useState } from 'react';
import Toast from 'react-toast-mela';

const App = () => {
const [showToast, setShowToast] = useState(false);

const handleShowToast = () => {
setShowToast(true);
setTimeout(() => setShowToast(false), 5000); // Hide toast after 5 seconds
};

return (
<div>
<button onClick={handleShowToast}>Show Toast</button>
{showToast &&
<Toast
message="This is a customizable toast message!"
duration={5000}
onClose={() => console.log('Toast closed')}
style={{ backgroundColor: 'blue', color: 'yellow', padding: '15px' }}
/>
}
</div>
);
};

export default App;`

## License

This package is licensed under the MIT License. See the LICENSE file for details.
