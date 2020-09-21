import React from 'react';
import { observer } from 'mobx-react';

const PostRow = observer(({ id, userId, title, body }) => (
  <tr>
    <td>{id}</td>
    <td>{userId}</td>
    <td>{title}</td>
    <td>{body}</td>
  </tr>
));

export default PostRow;
