import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({ 
    selector: 'content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css', './content.responsive.component.css']
})

export class ContentComponent implements OnInit {

    @Input() content_img: string = "";
    @Input() content_title: string = "";
    @Input() content_description: string = "";
    private id: string | null = "post000";

    constructor(
        private route: ActivatedRoute
    ) {}
    
    ngOnInit(): void {
        // metodo utilizado para capturar o id dá noticia ao ser criado.
        this.route.paramMap.subscribe(value =>
            this.id = value.get('id')
        );

        this.writeParamsInContent(this.id);
    }

    writeParamsInContent(id: string | null) {
        const result = dataFake.filter(post => post.id === id)[0];

        this.content_img = result.img;
        this.content_title = result.title;
        this.content_description = result.description;
    }
}