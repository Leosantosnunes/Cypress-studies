import { BrowserModule } from "@angular/platform-browser"
import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { ProductComponent } from "./services/product/product.component"
import { ServiceComponent } from "./pages/service/service.component"
import { AboutComponent } from "./pages/about/about.component"
import { HomeComponent } from "./pages/home/home.component"
import { ContactComponent } from "./pages/contact/contact.component"
import { FooterComponent } from "./partials/footer/footer.component"
import { HeaderComponent } from "./partials/header/header.component"

describe('AppModuleComponent.cy.ts', () => {
  it('playground', () => {
     cy.mount(AppComponent,{
      declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ContactComponent,
        HomeComponent,
        AboutComponent,
        ServiceComponent,
        ProductComponent
      ],
      imports: [
        BrowserModule,
        AppRoutingModule
      ],
      providers: []
     })
  })
})