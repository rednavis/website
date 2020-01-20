import React, { Component } from 'react'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import './style.scss'

class PopupForm extends Component{
  state = {
    active: '',
    name: '',
    email: '',
    phone: '',
    text: '',
    closeForm: false
  }

  // response = async() =>{
  //   const data = await fetch('http://geohelper.info/api/v1/countries?apiKey=ndOdzVmDWUb385YQvvaYXwc5QdcEYHpU', {
  //     method: 'GET',
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   })
  //   const result = await data.json();
  //   console.log(result);
  // }

  // componentDidMount(){
  //   this.response();
  // }
  

  submit = (e) =>{
    const { name, email, phone, text } = this.state
    const url = '/mail.php';
    const data = [
      {field: name, label: 'name'},
      {field: email, label: 'email'},
      {field: phone, label: 'phone'},
      {field: text, label: 'message'},
    ];
    let formData = new FormData();
    data.forEach(el =>{
      formData.append(el.label, el.field);
    })
    fetch(url, { 
      method: 'POST', 
      body: formData 
    })
    .then((response) => {
      setTimeout(()=>{
        this.setState({name: '', email: '', phone: '', text: '', closeForm: true, value: ''});
      }, 500)
      return response.text();
    });
    e.preventDefault();
  }

  changeValue = (e) =>{
    const val = e.target.value
    const name = e.target.name
    this.setState({[name]: val})
  }

  changeFocus = (input) =>{
    this.setState({active: input})
  }

  changeBlur = (input) =>{
    this.setState({active: ''})
  }

  closePopup = () =>{
    const { openPopup } = this.props
    this.setState({closeForm: false});
    openPopup();
  }

  render(){
    const { popup, openPopup } = this.props
    const { active, name, email, phone, text, closeForm } = this.state
    return(
      <section className={`popup ${popup ? 'open' : ''}`}>
        <div className="popup__bg">

          <div className={`popup__success ${closeForm ? 'visible' : ''}`}>
            <p className="popup__success_top">Thanks for contacting us.</p> 
            <p className="popup__success_bottom">We will be in touch with you shortly. Have a great day!</p>
            <div onClick={this.closePopup} className="btn popup__success_btn">OK</div>
          </div>

          <div className={`popup__container ${closeForm ? 'hidden' : ''}`}>
            <div className="popup__close" onClick={openPopup}>
              <img src="/assets/Popup/close-popup.svg" alt=""/>
            </div>
            <p className="popup__title">CONTACT US</p>
            <form onSubmit={(e)=>this.submit(e)}>
              <div className="popup__box">
                <label className={`popup__label ${active === 'name' || name ? 'focus' : ''}`}><p>Name *</p>
                  <input type="text" name="name" placeholder="" 
                    onFocus={()=>this.changeFocus('name')} 
                    onChange={(e)=>this.changeValue(e)}
                    onBlur={this.changeBlur}
                    value={name}
                    required="required"
                    autoComplete="off"
                    />
                </label>
                <label className={`popup__label ${active === 'email' || email ? 'focus' : ''}`}><p>Email *</p>
                  <input type="email" name="email" placeholder="" 
                    onFocus={()=>this.changeFocus('email')} 
                    onChange={(e)=>this.changeValue(e)}
                    onBlur={this.changeBlur}
                    value={email}
                    required="required"
                    autoComplete="off"
                    />
                </label>
                <label className={`popup__label ${active === 'phone' || phone ? 'focus' : ''}`}><p>Phone</p>
                  <PhoneInput type="tel" name="phone" placeholder="" 
                    onFocus={()=>this.changeFocus('phone')} 
                    // onChange={(e)=>this.changeValue(e)}
                    onChange={ phone => this.setState({ phone })}
                    onBlur={this.changeBlur}
                    value={ this.state.value }
                    autoComplete="off"
                    />
                </label>
                <label className={`popup__label text ${active === 'text' || text ? 'focus' : ''}`}><p>Add comment *</p> 
                  <textarea className="textarea" type="text" name="text" placeholder="" 
                    onFocus={()=>this.changeFocus('text')} 
                    onChange={(e)=>this.changeValue(e)}
                    onBlur={this.changeBlur}
                    value={text}
                    required="required"
                    autoComplete="off"
                    />
                </label>
                <div className="popup__file">
                  <img src="assets/Popup/file.svg" alt=""/>
                </div>
              </div>
              <input className="submit" id="submit" type="submit" value="submit"/>
            </form>
          </div>
        </div>
      </section>
    )
  }
}

export default PopupForm