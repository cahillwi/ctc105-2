import express from 'express';

// abstract is a OOP key word that means a class can't be instantiated directly but must be extended from.
export abstract class CommonRoutesConfig {
    app: express.Application;
    name: string;

    constructor(app: express.Application, name: string) {
        this.app = app;
        this.name = name;
        this.configureRoutes();
    }
    getName() {
        return this.name;
    }

    // express.Application specifies the return type that is expected when this abstract function is created in the class that extends CommonRoutesConfig
    abstract configureRoutes(): express.Application;
}