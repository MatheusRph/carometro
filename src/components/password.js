import "./styles/form.css";

export default function Password() {
  return (
    <form className="form-pai">
      <div className="interaction">
        <div className="mb-3">
          <h3 htmlFor="exampleInputEmail1" className="form-label">Digite sua senha</h3>
          <div id="emailHelp" className="form-text">seuEmail</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Senha</label>
          <input type="password" className="form-control input-usuario" id="exampleInputPassword1" placeholder="Insira sua senha" />
        </div>
        <div className="form-check">
        </div>
        <button type="submit" className="button-avancar btn btn-danger">Avançar</button>
      </div>
    </form>
  );
}
