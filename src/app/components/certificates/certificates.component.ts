import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent implements OnInit{
  images:any ;
  hiddenImages:any;
  badges:any;
  show:Boolean = true;
  ngOnInit(): void {
      AOS.init();
      this.images = ["https://media.licdn.com/dms/image/C5622AQFFaHdP9vbcjw/feedshare-shrink_800/0/1650463362147?e=1689811200&v=beta&t=4r6Bg9JAqAOu4ccq4kVrScfBlz0FR2bjL60R719yUbY",
  "https://media.licdn.com/dms/image/C4D22AQH3D5m7DVod0w/feedshare-shrink_800/0/1653127305875?e=1689811200&v=beta&t=uBzwAMm6ai6UNIMbcgCvw2FX3qdSrlA9b7R8lQOPTsk",
"https://media.licdn.com/dms/image/C4D22AQFw6CNzc0FiIA/feedshare-shrink_1280/0/1653194848238?e=1689811200&v=beta&t=mLytEyxQvZDTGqNV9ws71_bR5acYxslMiq6zVVjYjG4",
      "https://media.licdn.com/dms/image/C5622AQGZHDx6Pl5mjw/feedshare-shrink_800/0/1669293909976?e=1689811200&v=beta&t=bkGLlmP_wwrF10UHBBafieYG6HCyDTrKmmBWyMaCRcQ","https://media.licdn.com/dms/image/C5622AQHABzUz3TczrA/feedshare-shrink_800/0/1669127486213?e=1689811200&v=beta&t=_8tdYpjU3aFxxZ1ZfwjU5b-5YKGmjntEL0RAbOhvJyY","https://media.licdn.com/dms/image/C4D22AQGgUc8RWH1y1g/feedshare-shrink_800/0/1654065622754?e=1689811200&v=beta&t=OnnssMUEZwlrs5evkiKCnNeaCcRTn9uj-irn78oaqYQ"];
      this.hiddenImages =["https://media.licdn.com/dms/image/sync/C4E27AQE2HENU3Eb8Fg/articleshare-shrink_800/0/1677785024876?e=1687687200&v=beta&t=fR0P4XChaCXWdm1elAtreKgPGLwOpLMk29-gO4knrKY",
      "https://media.licdn.com/dms/image/C4D22AQEP5x27KnUqsg/feedshare-shrink_800/0/1656512359486?e=1689811200&v=beta&t=9YowHXD5B368C4sr_oZSvdCFRUmQAsakY4-YNCe3k3w",
      "https://media.licdn.com/dms/image/C5622AQGLVoLN3yYwVg/feedshare-shrink_1280/0/1665992416208?e=1689811200&v=beta&t=9JdeeS1VbYQXJdNOEU5WhHaDRTZz0bUpBuchQTQOapQ",
      ]
      this.badges=["https://github.com/SkShoheb33/Images/blob/main/badges/aws-academy-graduate-aws-academy-cloud-foundations.png?raw=true",
      "https://github.com/SkShoheb33/Images/blob/main/badges/google-analyst-badge.png?raw=true",
      "https://github.com/SkShoheb33/Images/blob/main/badges/mta-introduction-to-programming-using-java-certified-2022.png?raw=true",
      "https://github.com/SkShoheb33/Images/blob/main/badges/mta-introduction-to-programming-using-python-certified-2022.png?raw=true"
      ]
  }
  toggleCertificates=()=>{
    this.show = !this.show;
  } 
}
