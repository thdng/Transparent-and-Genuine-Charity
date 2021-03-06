import React from 'react'
import { Link } from 'react-router-dom';

const Thankyou = () => {
  return (
    <div>
      <h1 className="p-4 display-4 text-center">You've made our day!</h1>

      <p className={"text-secondary"}>
        Thank you so much for your donation! Your support will have an immediate impact on the charity you selected. From both of us, thank you! Your money now have been tranfered to the charity, so sit back and smile, because you've done something amazing today!
      </p>

      <p className="p-5 text-monospace text-center text-secondary">
        <Link to={'/charities'}>
          <button className="btn btn-primary active w-75" type="button">Donate to another charity!</button>
        </Link>
      </p>
    </div>
  )
}

export default Thankyou
