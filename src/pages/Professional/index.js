import React from 'react'
import Circle from '../../components/Circles'
import Comment from '../../components/Comments'
import './style.scss'

import imgProfessional from '../../assets/fig-2.png'
import laura from '../../assets/laura.png'
import candinho from '../../assets/candinho.png'
import wesley from '../../assets/wesley.png'
import maria from '../../assets/maria.png'
import BackgroundProfessional from '../../assets/background-professional.svg'


const Professional = () => {
  return (
    <>
      <div className="background-professional"><img src={BackgroundProfessional} alt=""/></div>
      <div className="professional-container" >
        <div className="borda" >
          <div className="container-left" >
            <img src={imgProfessional} alt="" />
            <div className="content-text" >
              <h1 className="name">LUIZA CABRAL</h1>
              <strong className="profession">Psicóloga cognitiva</strong>
            </div>
          </div>
          <div className="container-right">
            <div className="button-container">
              <button className="button btn-primary" >Ver progressão</button>
              <button className="button btn-outline">Editar perfil</button>
            </div>
          </div>
        </div>
      </div>
      <section className="professional-body" >
        <div className="body-left">
          <p className="body-text">Ao terminar nossas aulas, você tem acesso a um selo validativo que te ajuda a se conectar com o cliente</p>
          <h1 className="body-title">AULAS</h1>
          <div className="body-circle">
            <Circle text="Saúde transexual" />
            <Circle text="Saúde transexual" />
            <Circle text="Saúde transexual" />
            <Circle text="Saúde transexual" />
            <Circle text="Saúde transexual" />
            <Circle text="Saúde transexual" />
            <Circle text="Saúde transexual" />
            <Circle text="VER TODAS" />
          </div>
          <p className="body-text-2">Indicamos que você siga o nosso fluxo, mas fique a vontade para decidir seu caminho</p>
        </div>
        <div className="body-right">
          <div className="card-professional">
            <div className="card-title">COMENTÁRIOS</div>
            <div className="card-comentario">
              <Comment img={laura} name="Laura Silva" local="Ouro preto, Olinda" comment="Comentário muito bom sobre como melhorou a saúde" />
              <Comment img={candinho} name="Candinho Lima" local="Cordeiro, Recife" comment="Comentário muito bom sobre como melhorou a saúde" />
              <Comment img={wesley} name="Wesley Barbosa" local="Santo Amaro, Recife" comment="Comentário muito bom sobre como melhorou a saúde" />
              <Comment img={maria} name="Maria Larissa" local="Coque, Recife" comment="Comentário muito bom sobre como melhorou a saúde" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Professional
