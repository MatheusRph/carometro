import "bootstrap/dist/css/bootstrap.css";
import "./form.css";

export default function Form() {
  return (
<form className="form-pai">
  <div className="interaction">
  <div className="mb-3">
    <h3 htmlFor="exampleInputEmail1" className="form-label">Login</h3>
    <div id="emailHelp" className="form-text">Bem-vindo(a) ao Portal Online SENAI-SP</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Usuário</label>
    <input type="password" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira seu E-mail ou CPF"/>
  </div>
  <div className="form-check">
  </div>
  <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
  </div>
</form>
  );
}
