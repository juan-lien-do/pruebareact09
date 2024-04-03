

export default function Faq() {
  return (
    <main className=''>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 mx-auto my-5">
            <h2>Cómo utilizar la página</h2>

            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Paso #1
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                  <div class="accordion-body ">
                    <p>En el primer paso, desde la página de inicio debe de pulsar <strong><code>Adelante</code></strong> para poder repartir los gastos. Cuando le pregunte <strong><code>¿Cuántos son?</code></strong> deberá ingresar el número correcto usando los botones con <strong><code>+</code></strong> y <strong><code>-</code></strong>. Deberá ingresar cuántas personas se vieron beneficiadas del servicio.</p>
                    <p>Si hay alguna persona que no pueda pagar por motivos como el ser de muy joven edad, se pueden tomar dos caminos:</p>
                    <ul>
                      <li>
                        Se lo puede no contar en el cálculo, repartiendo su parte entre todos.
                      </li>
                      <li>
                        Se lo puede contar en el cálculo, haciendo que su tutor se encargue de los gastos a su nombre.
                      </li>
                    </ul>
                    <p>Finalmente hacer click en <strong><code>Adelante</code></strong> otra vez</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Paso #2
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>En el segundo paso vamos a cargar los nombres y el dinero aportado por cada una de las personas. Podremos ir de una persona a otra con <strong><code>Volver</code></strong> y <strong><code>Siguiente persona</code></strong>. Tendremos una tabla que nos mostrará el progreso que hayamos hecho, con la persona actual resaltada en naranja.</p>
                    <p><span className="text-warning fw-bold">Advertencia: </span>No podremos avanzar entre personas si colocamos un nombre repetido o uno vacío. Se puede modificar la persona actual o volver atrás para corregir el nombre de otra persona.</p>
                    <p>Si ya llenamos todos los datos pero nos olvidamos de una persona, no hay problema, podemos añadir otra persona con el botón <strong><code>Añadir otra persona</code></strong>, así como tambien podremos quitar una persona si es que contamos mal.</p>
                    <p>Cuando ya no haya más personas por añadir, podremos hacer click en <code><strong>Finalizar</strong></code>.</p>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Paso #3
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <p>Este es el último paso y el más sencillo. Aparecerá una tabla y un botón a clickear: <strong><code>Generar pagos</code></strong>. Se desplegará una lista de pagos a realizar con origen, destino y monto.</p>
                    <p>Opcionalmente podremos descargar el detalle en PDF con <strong><code>Descargar PDF</code></strong>.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="h2">Sobre la página</p>
            <div class="accordion" id="accordionExample2">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                    Tecnologías empleadas
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                  <div class="accordion-body ">
                    <p>Las tecnologías son las siguientes:</p>
                    <ul>
                      <li>GitHub</li>
                      <li>GitHub Pages</li> 
                      <li>VS Code</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>SASS</li>
                      <li>Bootstrap</li>
                      <li>React</li>
                      <li>html2pdf.js</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Acceso al código
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                  <div class="accordion-body">
                    <p>Lo encontrarás <a href="https://github.com/juan-lien-do/repartir" target="_blank">aquí</a>. Se reciben contribuciones.</p>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>

    </main>)
};