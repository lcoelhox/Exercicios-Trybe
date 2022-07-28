import React, { Component } from 'react'
import Button from './Button'

export default class Form extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
    }
  }


    handleChange = ({ target }) => {
        const { name } = target
        const value = target.type === 'checkbox' ? target.checked : target.value
        
        this.setState({
          [name]: value
        })
      }

  render() {
    return (
      <form>
        <h2>Campo de preenchimento</h2>
        <fieldset>
            <label htmlFor=""> Nome:
            <input type="text" name='name' value={this.state.name} onChange={this.handleChange} required /> <hr />
            </label>
            <label> Email:
            <input type="email" name='email' value={this.state.email} onChange={this.handleChange} required /> <hr />
            </label>
            <label> CPF:
            <input type="text" name='cpf' value={this.state.cpf} onChange={this.handleChange} required /> <hr />
            </label>
            <label> Endereço:
            <input type="text" name='endereço' value={this.state.endereço} onChange={this.handleChange} required /> <hr />
            </label>
            <label> Cidade:
            <input type="text" name='cidade' value={this.state.cidade} onChange={this.handleChange} required /> <hr />
            </label>
            <label> Estado:
            <input type="text" name='estado' value={this.state.estado} onChange={this.handleChange} required /> <hr />
            </label>
            <label htmlFor=""> Você mora em apartamento ou casa?
            <input type="radio" name='casa'/>casa
            <input type="radio" name='apartamento'/>apartamento
            </label>
        </fieldset>
        <fildset>
            <label htmlFor=""> Resumo do curriculo:
                <textarea maxLength={1000} required> </textarea>
            </label>
            <hr />
            <label htmlFor=""> Cargo:
                <textarea maxLength={40} required onMouseEnter={'Preencha com cuidado esta informação.'}> </textarea>
            </label>
            <hr />
            <label htmlFor=""> Descrição de Cargo:
                <input type="text" />
            </label>
        </fildset>
        <hr />
        <Button />
      </form>
    )
  }
}

