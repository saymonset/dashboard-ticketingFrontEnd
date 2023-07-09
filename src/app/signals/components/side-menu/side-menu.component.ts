import { Component, signal, inject } from '@angular/core';
import { Router } from '@angular/router';


interface MenuItem {
  title: string;
  route: string;
}

@Component({
  selector: 'side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent {

  private router      = inject( Router )

  public menuItems = signal<MenuItem[]>([
    { title: 'Pedidos', route: 'pedidos' },
    { title: 'Contador', route: 'counter' },
    { title: 'Usuario', route: 'user-info' },
    { title: 'Mutaciones', route: 'properties' },
    
  ]);

  public godashBoard(){
    this.router.navigateByUrl('/dashboard')
  }

  // public menuItems: MenuItem[] = [
  //   { title: 'Contador', route: 'counter' },
  //   { title: 'Usuario', route: 'user-info' },
  //   { title: 'Mutaciones', route: 'properties' },
  // ];

}
