console.log('Starting up');

function onInitPage() {
    renderPage()
}

function renderPage() {

    var projects = getProjects();
    var strHTML = projects.map(function (project) {
        return `
        <div class="col-md-6 col-sm-6 portfolio-item">
          <a class="portfolio-link" data-toggle="modal" onclick="onProjectClick('${project.id}')">
            <div class="portfolio-hover">
              <div class="portfolio-hover-content">
                <i class="fa fa-plus fa-3x"></i>
              </div>
            </div>
            <img class="img-fluid" src="img/portfolio/${project.id}-thumbnail.png" alt="">
          </a>
          <div class="portfolio-caption">
            <h4>${project.name}</h4>
            <p class="text-muted">${project.title}</p>
          </div>
        </div>
        `
    })

    var elProjectsList = document.querySelector('#projects');
    elProjectsList.innerHTML = strHTML.join('');
}

function onProjectClick(projectID){
    openModal(projectID);
}

function openModal(projectID){
    var project = getProject(projectID);
    var strHTML = 
    `
    <h2>${project.name} Project</h2>
    <p class="item-intro text-muted">${project.title}</p>
    <img class="img-fluid d-block mx-auto" src="img/portfolio/${project.id}-full.png" alt="">
    <p>${project.desc}</p>
    <ul class="list-inline">
      <li>Date Published: ${project.publishedAt}</li>
      <li>Released Version: ${project.version}</li>
      <li>Final Version Release Date : ${project.finaVersionDate}</li>
      <li style="padding-top:5px"><button type="button" onclick="window.location.assign('projs/${project.id}/index.html')";">Check it HERE</button></li>
    </ul>
    <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>
    `
    var elPortfolioModals = document.querySelector('.modal-body');
    elPortfolioModals.innerHTML = strHTML;

    $('#project-modal').modal('show')

}

function onSubmit(){
    var elEmailAddress = document.querySelector('#email').value
    var elSubjectInput = document.querySelector('#subject').value
    var elMessageInput = document.querySelector('#message').value

    if (elEmailAddress === '' || elSubjectInput === '' || elMessageInput === '') return;

    window.location.assign(`https://mail.google.com/mail/?view=cm&fs=1&to=${elEmailAddress}&su=${elSubjectInput}&body=${elMessageInput}`)
}

function openCanvas() {
  document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
  document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');
  if (document.querySelector('.offcanvas-aside').classList.contains('offcanvas-aside-open')) {
      var elContactFom = document.querySelector('#contact');
      var strHTML =
          `
              <section class="mb-6">
              <!--Section heading-->
              <h2 class="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>  
              <div class="row">
                  <div class="col-md-9 mb-md-0 mb-5">
                      <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                          <div class="row">
                              <div class="col-md-12">
                                  <div class="md-form mb-0">
                                      <label for="email" class="form-email">Your email</label>
                                      <input type="text" id="email" name="email" class="form-control">
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-12">
                                  <div class="md-form mb-0">
                                      <label for="subject" class="form-subject">Subject</label>
                                      <input type="text" id="subject" name="subject" class="form-control">
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-12">
                                  <div class="md-form">
                                      <label for="message">Message</label>
                                      <textarea type="text" id="message" name="message" rows="2" class="form-control md-textarea"></textarea>
                                  </div>
                              </div>
                          </div>
                      </form>
                      <div class="text-center">
                          <button type="button" onclick="onSubmit()" class="btn btn-primary">Submit</button>
                      </div>
                      <div class="status"></div>
                  </div>
              </div>
          </section>        
      `
      elContactFom.innerHTML = strHTML;
  };
}