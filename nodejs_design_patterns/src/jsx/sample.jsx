/**
 * React.Componentとsyntax sugger
 * React.Fragment と <>は同じ意味。入れ子にしないといけないけど無理にdiv使わなくて良い時にどうぞ
 */

import * from React

const Button = () => {
  return {

    <>
      <p>aaa</p>
      <p>bbb</p>
    </>
  }
}