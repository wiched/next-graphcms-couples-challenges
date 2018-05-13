import { Fragment } from 'react'

const Contacts = () => {
  return (
    <Fragment>
      <h4 id="contact">Contact Us</h4>
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">person</i>
              <input placeholder="First Name" id="first_name" type="text" className="validate" />
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">mail</i>
              <input placeholder="Email" id="email" type="email" className="validate" />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <i className="material-icons prefix">mode_edit</i>
              <textarea placeholder="Message" id="icon_prefix2" className="materialize-textarea"></textarea>
            </div>
          </div>
          <div className="waves-effect waves-light deep-orange darken-1 btn showMore">
            <button className="btn waves-effect waves-light" type="submit" name="action">Submit
              <i className="material-icons right">send</i>
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
      #contact {
        margin-top: 100px
      }
        `}</style>
    </Fragment >
  )
}

export default Contacts