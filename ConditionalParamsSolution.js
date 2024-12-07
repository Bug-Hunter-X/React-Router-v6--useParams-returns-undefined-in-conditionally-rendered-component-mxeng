The solution involves checking if `useParams` returns a value before accessing its properties.  Using optional chaining (?.) prevents errors if params is undefined.

```javascript
import { useParams } from 'react-router-dom';

const MyComponent = () => {
  const params = useParams();

  // Check for undefined params before accessing properties
  const userId = params?.id || null; // Use optional chaining and provide a default

  return (
    <div>
      {userId ? (
        <p>User ID: {userId}</p>
      ) : (
        <p>Loading user...</p> 
      )}
    </div>
  );
};

export default MyComponent;
```