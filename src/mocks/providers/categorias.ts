import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Item } from '../../models/item';

@Injectable()
export class Categorias {
    items: Item[] = [];

    defaultItem: any = {};

    constructor(public http: Http) {
        let items = [
            {
                id: 1,
                nombre: 'LOGÍSTICA',
                descripcion: '',
                subcategorias: [
                    {
                        id: 1,
                        nombre: 'AB. ECONOMATO',
                        descripcion: ''
                    },
                    {
                        id: 2,
                        nombre: 'AB. FORMATERÍA',
                        descripcion: ''
                    },
                    {
                        id: 3,
                        nombre: 'SERVICIO COURIER',
                        descripcion: ''
                    },
                    {
                        id: 4,
                        nombre: 'AB. DE BIENES',
                        descripcion: ''
                    }
                ]
            },
            {
                id: 2,
                nombre: 'SERVICIOS BÁSICOS Y ELECTRODOMÉSTICOS',
                descripcion: '',
                subcategorias: [
                    {
                        id: 1,
                        nombre: 'ENERGÍA ELECTRICA',
                        descripcion: ''
                    },
                    {
                        id: 2,
                        nombre: 'AGUA',
                        descripcion: ''
                    },
                    {
                        id: 3,
                        nombre: 'SERVICIO DE LIMPIEZA (DESEMPEÑO DE PERSONAL)',
                        descripcion: ''
                    }
                ]
            },
            {
                id: 3,
                nombre: 'INFRAESTRUCTURA EXTERNA',
                descripcion: '',
                subcategorias: [
                    {
                        id: 1,
                        nombre: 'FRISO LUMINOSO O LETRERO C. HISTÓRICO',
                        descripcion: ''
                    },
                    {
                        id: 2,
                        nombre: 'PUERTA PRINCIPAL (PÓRTICO - MAMPARA)',
                        descripcion: ''
                    },
                    {
                        id: 3,
                        nombre: 'PAREDES DE FACHADA',
                        descripcion: ''
                    },
                    {
                        id: 4,
                        nombre: 'VIDRIOS DE FACHADA',
                        descripcion: ''
                    },
                    {
                        id: 5,
                        nombre: 'RETIRO MUNICIPAL',
                        descripcion: ''
                    },
                    {
                        id: 6,
                        nombre: 'VEREDA',
                        descripcion: ''
                    }
                ]
            },
            {
                id: 4,
                nombre: 'ESTADO DE TECHO',
                descripcion: '',
                subcategorias: [
                    {
                        id: 1,
                        nombre: 'ESTADO DEL TECHO',
                        descripcion: ''
                    },
                    {
                        id: 2,
                        nombre: 'ESTADO CONDUCTO DE DRENAJE PLUVIAL',
                        descripcion: ''
                    },
                    {
                        id: 3,
                        nombre: 'ESTADO DE CONBERTURA DE CALAMINA EXISTENTE',
                        descripcion: ''
                    },
                    {
                        id: 4,
                        nombre: 'ESTADO DE CANALETA DE DRENAJE',
                        descripcion: ''
                    },
                    {
                        id: 5,
                        nombre: 'ESTADO DE TRATAMIENTO IMPERMEABILIZABLE EXISTENTE',
                        descripcion: ''
                    },
                    {
                        id: 6,
                        nombre: 'ESTADO DE GEOMEMBRANA EXITENTE',
                        descripcion: ''
                    }
                ]
            },
            {
                id: 5,
                nombre: 'INFRAESTRUCTURA INTERNA',
                descripcion: '',
                subcategorias: [
                    {
                        id: 1,
                        nombre: 'AREA DE CAJA - VENTANILLAS',
                        descripcion: ''
                    },
                    {
                        id: 2,
                        nombre: 'AREA DE ESPERA',
                        descripcion: ''
                    },
                    {
                        id: 3,
                        nombre: 'AREA DE PLATAFORMA / OPERACIONES',
                        descripcion: ''
                    },
                    {
                        id: 4,
                        nombre: 'AREA DE ASESORES DE NEGOCIOS',
                        descripcion: ''
                    },
                    {
                        id: 5,
                        nombre: 'SALA DE REUNIONES',
                        descripcion: ''
                    },
                    {
                        id: 6,
                        nombre: 'AREA RE RACK',
                        descripcion: ''
                    },
                    {
                        id: 7,
                        nombre: 'ARCHIVO',
                        descripcion: ''
                    },
                    {
                        id: 8,
                        nombre: 'ECONOMATO',
                        descripcion: ''
                    },
                    {
                        id: 9,
                        nombre: 'KITCHEN',
                        descripcion: ''
                    },
                    {
                        id: 10,
                        nombre: 'LACTARIO',
                        descripcion: ''
                    },
                    {
                        id: 11,
                        nombre: 'ESCALERAS / PASADIZOS',
                        descripcion: ''
                    },
                    {
                        id: 12,
                        nombre: 'SERVICIOS HIGIÉNICOS',
                        descripcion: ''
                    },
                ]
            },
            {
                id: 6,
                nombre: 'MOBILIARIO / SILLONERA',
                descripcion: '',
                subcategorias: [
                    {
                        id: 1,
                        nombre: 'BANQUETAS DE ESPERA',
                        descripcion: ''
                    },
                    {
                        id: 2,
                        nombre: 'SILLAS FIJAS',
                        descripcion: ''
                    },
                    {
                        id: 3,
                        nombre: 'SILLAS GIRATORIAS',
                        descripcion: ''
                    },
                    {
                        id: 4,
                        nombre: 'TACHOS',
                        descripcion: ''
                    },
                    {
                        id: 5,
                        nombre: 'ORDENADORES DE COLA',
                        descripcion: ''
                    },
                    {
                        id: 6,
                        nombre: 'MÓDULOS DE ATENCIÓN',
                        descripcion: ''
                    },
                    {
                        id: 7,
                        nombre: 'ESTANTES',
                        descripcion: ''
                    },
                    {
                        id: 8,
                        nombre: 'CREDENZAS',
                        descripcion: ''
                    },
                    {
                        id: 9,
                        nombre: 'ANAQUELES - ARCHIVO',
                        descripcion: ''
                    },
                    {
                        id: 10,
                        nombre: 'ANAQUELES - ECONOMATO',
                        descripcion: ''
                    }
                ]
            },
            {
                id: 7,
                nombre: 'EQUIPAMIENTO (AA, GE, EXT, LE, UPS, PAT, BOMBAS)',
                descripcion: '',
                subcategorias: [
                    {
                        id: 1,
                        nombre: 'INSTALACIONES ELÉCTRICAS Y RED',
                        descripcion: ''
                    },
                    {
                        id: 2,
                        nombre: 'UPS',
                        descripcion: ''
                    },
                    {
                        id: 3,
                        nombre: 'GRUPO ELECTRÓGENO',
                        descripcion: ''
                    },
                    {
                        id: 4,
                        nombre: 'AIRE ACONDICIONADO',
                        descripcion: ''
                    },
                    {
                        id: 5,
                        nombre: 'RACK - SERVIDOR',
                        descripcion: ''
                    },
                    {
                        id: 6,
                        nombre: 'CISTERNAS Y BOMBAS',
                        descripcion: ''
                    },
                    {
                        id: 7,
                        nombre: 'TANQUE ELEVADO',
                        descripcion: ''
                    },
                    {
                        id: 8,
                        nombre: 'TV, DVD Y RACK',
                        descripcion: ''
                    },
                    {
                        id: 9,
                        nombre: 'LUCES DE EMERGENCIA',
                        descripcion: ''
                    },
                    {
                        id: 10,
                        nombre: 'EXTINTORES',
                        descripcion: ''
                    },
                    {
                        id: 11,
                        nombre: 'PERSIANAS',
                        descripcion: ''
                    },
                    {
                        id: 12,
                        nombre: 'POZO A TIERRA',
                        descripcion: ''
                    }
                ]
            }
        ];

        for (let item of items) {
            this.items.push(new Item(item));
        }
    }

    query(params?: any) {
        if (!params) {
            return this.items;
        }

        return this.items.filter((item) => {
            for (let key in params) {
                let field = item[key];
                if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
                    return item;
                } else if (field == params[key]) {
                    return item;
                }
            }
            return null;
        });
    }

    add(item: Item) {
        this.items.push(item);
    }

    delete(item: Item) {
        this.items.splice(this.items.indexOf(item), 1);
    }
}