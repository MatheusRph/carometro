import MyNavbar from "@/components/nav-bar";

export default function NameAluno() {
  return (
    <>
      <div class="container text-center">
        <div class="row">
          <div class="col">1 of 3</div>
          <div class="col-6">2 of 3 (wider)</div>
          <div class="col">3 of 3</div>
        </div>
        <div class="row">
          <div class="col">1 of 3</div>
          <div class="col-5">2 of 3 (wider)</div>
          <div class="col">3 of 3</div>
        </div>
      </div>
    </>
  );
}