import React, { useState } from 'react';


const About = () => {

    return (
        <div>
            {/* header image and about me beginning */}
            <img src="https://snz04pap002files.storage.live.com/y4mJQ72BDV5zj1WlZYBgDAIs1RtV9DsXxLOzME3jmoFvINl7ANWD6EpZO7hl3NbjU5-EdhKpRVLCPydlaZ8yGzm-7-Cq8M0dsYG2gIiHC1ju-dNdj5kSOKUen1lWGNepolmOO92OaixCZ7lj77t7IG74jhi4J9PpZMnyMxxWZFiv50CDs5buxXpW114QW0WoUWjeJL61fAtYPBTPw9dM7BcEOq7B-zXCS17JkDWkm0YjAk?encodeFailures=1&width=1153&height=824" class="img-fluid mx-auto d-block about-me-img" alt="About Josh"></img>

            <hr class="solid"></hr>
            <h2>About Me</h2>

            {/* About me description */}

            <p className="about-me-p">Hi! My name is Josh Molyneaux, and I am located in the Hartford County of Connecticut. I am a software Engineer by profession and a hobbyist photographer. I specialize in portrait photography, checkout out some of my highlights and feel free to contact me with any questions! Thank you for your interest in Akuphocus!</p>

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
                        <img src="https://snz04pap002files.storage.live.com/y4mDRNqBnRTIOsOAvxbyzL70wHtNACKUftINpsNP4NLZwV-mYfnmwKZSD758OGslmREA9Pi4BRqNA1yAqueSpuPSSgsa_00ONAdlhz8CF6_bo-49Ph8ZFvw93XHvEdDy3_Wu4Ifh0LLNi-LUKBHbZVpPNDrWbbYU6PLt3kNqeGKcJLrPdmF5o82DHhkhZXv7AqyzVpMSJpPTzWHXNETgg6EgiKygLw3zf5JGPW_Xap5pQo?encodeFailures=1&width=549&height=824" class="d-block w-100" alt="..."></img>

                    </div>
                    <div class="carousel-item">
                        <img src="https://snz04pap002files.storage.live.com/y4mYhzjO7RWnEFFshpq_2NkKzBrd9JwWEUXqZiiFE3sIFhSW3s-G3O3DeVSjhMbavCA6hGtMWjmgp3baYFv-JsCRg-CFKyrOtwi3wRST5iT7BxF8iUk-TUI_Qxgt8UcJsVmZKZZkbtk1yeJyZGImLcNhh90YKDb1CiPxMmwASinLmOP0GEagw-dtDv_H7mC1CkSNwd1nIbK4SanVCDbebuxET0FKSkbd4vexWgS3zxmHC8?encodeFailures=1&width=583&height=875" class="d-block w-100" alt="..."></img>

                    </div>
                    <div class="carousel-item">
                        <img src="https://snz04pap002files.storage.live.com/y4ml5-k0Zi7nbp3E4PbDl8iyGDIO2kU4l5wJ1z9dUyTjEgHF8aJtUdJDTJ8aCg0KeZtnkzxoiN-gy3q25XRColGAf0pNKSkhg7c8bZ3ZAJ-Q3ZMZ1jsgqDPEKh15aOHvoFUAvoUmECg4Rk2kx2O1dKEkpTDnsw-HMNBQC_ZfMru4RHPu4hFniMBiTq8ZiLKhikwN-3gGH4j0aHU7QpsdDl1zFWzAaPFFgoQXHpQGrSggws?encodeFailures=1&width=583&height=875" class="d-block w-100" alt="..."></img>

                    </div>
                    <div class="carousel-item">
                        <img src="https://snz04pap002files.storage.live.com/y4mNXqAl9dKDJc7OZ-C2_V96HyJVbk8JfdYSUpE3hyXqav-4xuF0KKFaxbEiiEDE-uV6ltGtDHNrrm1IcpW7IiB-dkpHOlb6_vS_bDFyAJrH_1_JlmR5YIMGtA_OloOI1_fjOX6VnXyOyYAfFANL4hrMV_BGyYPjbrZfCBazNafrAK-7msFdVm8cU7yzMyDd_iEr3wLe9EoBIq20MdMBlv9u8FY86FGeInpus6704wxWHE?encodeFailures=1&width=549&height=824" class="d-block w-100" alt="..."></img>

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
};

export default About;