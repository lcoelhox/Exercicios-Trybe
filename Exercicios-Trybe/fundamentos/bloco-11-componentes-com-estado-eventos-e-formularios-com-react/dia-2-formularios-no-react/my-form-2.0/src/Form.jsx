import React, { Component } from 'react'
import Button from './Button'

export default class Form extends Component {

    state = {
      name: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value  }, () => {
          const { name, email, cpf, endereço, cidade, estado } = this.state
        })
    }

  render() {
    return (
      <form>
        <h2>Campo de preenchimento</h2>
        <fieldset>
            <label htmlFor=""> Nome:
            <input type="text" name='name' required /> <hr />
            </label>
            <label> Email:
            <input type="email" name='email' required /> <hr />
            </label>
            <label> CPF:
            <input type="text" name='cpf' required /> <hr />
            </label>
            <label> Endereço:
            <input type="text" name='endereço' required /> <hr />
            </label>
            <label> Cidade:
            <input type="text" name='cidade' required /> <hr />
            </label>
            <label> Estado:
            <input type="text" name='estado' required /> <hr />
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

