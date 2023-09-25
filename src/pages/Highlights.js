import React from 'react';

const Highlights = () => {

    return (
        <div>
            {/* Beginning of highlights section */}
            <hr class="solid"></hr>
            <h2>Highlights</h2>

            <div id="carouselExampleCaptions" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://snz04pap002files.storage.live.com/y4mjaFBJue6QgZZyTbCvEbetASgt8ZoFF1IWFx5VPQm6bpwm1-iF4EfF9h61khRYNgMg2h80YuV518Byeu0_glS9dga_a8arLtFXGJEC9dWfE--bNAhFLKMVuyUjsVDg5D97jMpw5D5FShc2CixGM8nYfgPJbMfF-GKb3NPLCjP6agmdpYdLFzCHENTBVzcViMuJztR8QgW4f1yeKQiMIAqEvKwfBtgU2SHqiBcI23g7MM?encodeFailures=1&width=549&height=824" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://snz04pap002files.storage.live.com/y4mDRNqBnRTIOsOAvxbyzL70wHtNACKUftINpsNP4NLZwV-mYfnmwKZSD758OGslmREA9Pi4BRqNA1yAqueSpuPSSgsa_00ONAdlhz8CF6_bo-49Ph8ZFvw93XHvEdDy3_Wu4Ifh0LLNi-LUKBHbZVpPNDrWbbYU6PLt3kNqeGKcJLrPdmF5o82DHhkhZXv7AqyzVpMSJpPTzWHXNETgg6EgiKygLw3zf5JGPW_Xap5pQo?encodeFailures=1&width=549&height=824" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://snz04pap002files.storage.live.com/y4mRh9GuA5kEZ5l1NGL2NbNN3TwzHOuVJMTHhYKlsvnNLRU41rB6zyvBKVexTigG2jxMwC15Si_MfwIKqNtowcA6yGGorMLtrWj4Z2Nt9DhjUShQR-ACURFc1IgBXmW1TpnF_jqPWPAcBwQcTPuXKMRh6TA4RVo-ELXEn_PJHbi1wl2A5AmiKHXkMktcJDxYB01EK6GeP9tRInLVPchCPF2JUhUanmbnLJWIDpJ-dmVAyo?encodeFailures=1&width=549&height=824" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                    <div class="carousel-item">
                        <img src="https://snz04pap002files.storage.live.com/y4mNXqAl9dKDJc7OZ-C2_V96HyJVbk8JfdYSUpE3hyXqav-4xuF0KKFaxbEiiEDE-uV6ltGtDHNrrm1IcpW7IiB-dkpHOlb6_vS_bDFyAJrH_1_JlmR5YIMGtA_OloOI1_fjOX6VnXyOyYAfFANL4hrMV_BGyYPjbrZfCBazNafrAK-7msFdVm8cU7yzMyDd_iEr3wLe9EoBIq20MdMBlv9u8FY86FGeInpus6704wxWHE?encodeFailures=1&width=549&height=824" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Highlights;