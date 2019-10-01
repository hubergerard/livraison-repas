export class Restaurant {
    nom: string;
    logoUrl: string;
    adresse: string;
    mail: string;

    constructor(nom, logoUrl, adresse, mail) {
        this.nom = nom;
        this.logoUrl = logoUrl;
        this.adresse = adresse;
        this.mail = mail;
    }
}