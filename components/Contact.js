import { Fragment } from 'react'

const Contacts = () => {
  return (
    <Fragment>
      <h3 id="contact">Contact Us</h3>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="First Name" id="first_name" type="text" className="validate" />

            </div>
            <div className="input-field col s6">
              <input placeholder="Last Name" id="last_name" type="text" className="validate" />

            </div>
          </div>

          <div className="row">

          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="Email" id="email" type="email" className="validate" />
            </div>
          </div>
          <div className="row">

          </div>
        </form>
      </div>
      <style jsx>{`
        `}</style>
    </Fragment>
  )
}

export default Contacts