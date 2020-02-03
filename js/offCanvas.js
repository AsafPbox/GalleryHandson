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