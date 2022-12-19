import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'viki';
  searchText = "";
  searchResults: Array<any> = [];

  contentList = [ {"id":"38117c","type":"series","title":"Can't Run Away from Love","href":"/tv/38117c-cant-run-away-from-love","image":"https://6.vikiplatform.com/image/15c55a0520d4475ba2abe2f7b9aab2da/dummy.jpg?x=b&a=0x0"},
  {"id":"38049c","type":"series","title":"Serendipity","href":"/tv/38049c-serendipity","image":"https://6.vikiplatform.com/image/2b5a401d74564b7aaefe078de07d0b91.jpg?x=b&a=0x0"},
  {"id":"50c","type":"series","title":"Boys Over Flowers","href":"/tv/50c-boys-over-flowers","image":"https://6.vikiplatform.com/image/3cbf77dfea414e648780c4ed854f7072.jpeg?x=b"},
  {"id":"37649c","type":"film","title":"Oversize Love","href":"/movies/37649c-oversize-love","image":"https://6.vikiplatform.com/image/0524961597834ec88780a029a26b125a.jpg?x=b&a=0x0"},
  {"id":"37865c","type":"series","title":"The Penthouse 3","href":"/tv/37865c-the-penthouse-3","image":"https://6.vikiplatform.com/image/11d1e6cacf424f92828897daf8ad035b.jpg?x=b&a=0x0"},
  {"id":"24004c","type":"series","title":"After School Club","href":"/tv/24004c-after-school-club","image":"https://6.vikiplatform.com/image/bb5b002fb2e74f6b81da298928d2ec96.jpg?x=b&a=0x0"},
  {"id":"37058c","type":"film","title":"Train to Busan","href":"/movies/37058c-train-to-busan","image":"https://6.vikiplatform.com/image/bf7da81a765c41fa944630749205f3ec.jpg?x=b&a=0x0"},
  {"id":"38062c","type":"series","title":"GO Into Your Heart","href":"/tv/38062c-go-into-your-heart","image":"https://6.vikiplatform.com/image/e2d285ed698247d4b3a0b444ceccdad1/dummy.jpg?x=b&a=0x0"},
  {"id":"37921c","type":"series","title":"RISKY","href":"/tv/37921c-risky","image":"https://6.vikiplatform.com/image/2258eba7ba5c4800b3b070ef9698ac73.jpg?x=b&a=0x0"},
  {"id":"36612c","type":"film","title":"Love","href":"/movies/36612c-love","image":"https://6.vikiplatform.com/image/f2b124269f184168a829de2428153c7c.jpg?x=b&a=0x0"},
  {"id":"38090c","type":"series","title":"The Love Master 2","href":"/tv/38090c-the-love-master-2","image":"https://6.vikiplatform.com/image/6cca1973d7724d1cb048c9c96574f984.jpg?x=b&a=0x0"},
  {"id":"38083c","type":"series","title":"Love in Black Hole","href":"/tv/38083c-love-in-black-hole","image":"https://6.vikiplatform.com/image/d775dfe7343843cfbc496380ffcfeef4/dummy.jpg?x=b&a=0x0"},
  {"id":"37734c","type":"series","title":"Love Is Science?","href":"/tv/37734c-love-is-science","image":"https://6.vikiplatform.com/image/dafadc64846449538fa1c3d0a6ab0eaa.jpg?x=b&a=0x0"},
  {"id":"37634c","type":"series","title":"Lovers of the Red Sky","href":"/tv/37634c-lovers-of-the-red-sky","image":"https://6.vikiplatform.com/image/6417f72410014a09a940ad20971d256a.jpg?x=b&a=0x0"},
  {"id":"36966c","type":"series","title":"The Oath of Love","href":"/tv/36966c-the-oath-of-love","image":"https://6.vikiplatform.com/image/b479af543dc44a3b9faa1fcc9f2c70c5.jpg?x=b&a=0x0"},
  ];
  constructor(){

  }

  ngOnInit(): void {
  }

  // when input change
  inputChange(e: any){
    this.searchResults = this.contentList.filter(item =>{
      return item.title.toLowerCase().indexOf(this.searchText.toLowerCase())>-1
    });
  }

  // when click on the close icon
  resetSearchText(){
    this.searchText = ""
  }


  redirect(result:any){
    window.open("https://www.viki.com"+result.href, '_blank');
  }
}
