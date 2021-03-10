import { NgModule, DoBootstrap, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';

import { BookReaderComponent } from './book-reader/book-reader.component';

@NgModule({
  declarations: [BookReaderComponent],
  imports: [BrowserModule],
  providers: [],
  entryComponents: [BookReaderComponent],
})
export class AppModule implements DoBootstrap {
  constructor(private injector: Injector) {
    const webComponent = createCustomElement(BookReaderComponent, { injector });
    customElements.define('book-reader', webComponent);
  }

  ngDoBootstrap() {}
}
