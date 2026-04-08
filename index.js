/**
 * NATURA GLOW COSMETICS - Logique JavaScript
 * Ce fichier gère l'affichage dynamique des produits, le panier d'achat,
 * les modales de détails et de contact, ainsi que l'intégration WhatsApp.
 */

const PRODUITS = [{
        id: 1,
        nom: "Sérum réparateur à la niacinamide",
        prix: 5000,
        description: "Régule le sébum et atténue les imperfections.",
        descriptionDetailler: "Ce sérum à la niacinamide régule l'excès de sébum, lutte contre les cernes et atténue les taches post-acnéiques pour une peau plus nette et équilibrée.",
        image: "1.jpg",
        categorie: "Visage",
        badge: "Best Seller",
        bienfaits: [
            "Régule l'excès de sébum",
            "Lutte contre les cernes",
            "Atténue les taches post-acnéiques"
        ]
    },

    {
        id: 2,
        nom: "Gommage corporel curcuma - carotte",
        prix: 7000,
        description: "Exfolie et régénère la peau en profondeur.",
        descriptionDetailler: "Ce gommage naturel élimine les cellules mortes, désincruste les pores et stimule la régénération cellulaire pour une peau douce et renouvelée.",
        image: "2.jpg",
        categorie: "Corps",
        badge: "Nouveau",
        bienfaits: [
            "Exfolie les peaux mortes",
            "Désincruste les pores",
            "Stimule la régénération cellulaire",
            "Renouvelle le tissu cutané"
        ]
    },

    {
        id: 3,
        nom: "Gel douche éclaircissant et exfoliant",
        prix: 8000,
        description: "Nettoie, exfolie et illumine la peau.",
        descriptionDetailler: "Ce gel douche combine des agents éclaircissants et exfoliants pour réduire la mélanine, éliminer les cellules mortes et rendre la peau plus lisse et éclatante.",
        image: "3.jpg",
        categorie: "Corps",
        badge: "Populaire",
        bienfaits: [
            "Réduit la production de mélanine",
            "Exfolie la peau",
            "Adoucit la peau",
            "Améliore l’éclat"
        ]
    },

    {
        id: 4,
        nom: "Crème corporelle hydratante à l’acide hyaluronique",
        prix: 10000,
        description: "Hydrate intensément et repulpe la peau.",
        descriptionDetailler: "Formulée à l'acide hyaluronique, cette crème hydrate en profondeur, nourrit la peau, la repulpe et apaise les irritations.",
        image: "4.jpg",
        categorie: "Corps",
        badge: "Premium",
        bienfaits: [
            "Hydrate en profondeur",
            "Nourrit la peau",
            "Repulpe le tissu cutané",
            "Apaise les irritations"
        ]
    },

    {
        id: 5,
        nom: "Savon visage à l’argile verte",
        prix: 2000,
        description: "Purifie et réduit l’excès de sébum.",
        descriptionDetailler: "Idéal pour les peaux grasses et acnéiques, ce savon absorbe le sébum, purifie la peau et réduit les imperfections.",
        image: "5.jpg",
        categorie: "Visage",
        badge: "Essentiel",
        bienfaits: [
            "Absorbe l’excès de sébum",
            "Purifie la peau",
            "Débouche les pores",
            "Réduit les boutons"
        ]
    },

    {
        id: 6,
        nom: "Savon visage au curcuma",
        prix: 2000,
        description: "Unifie le teint et lutte contre l’acné.",
        descriptionDetailler: "Ce savon au curcuma possède des propriétés anti-inflammatoires, antibactériennes et antioxydantes pour une peau plus saine et éclatante.",
        image: "6.jpg",
        categorie: "Visage",
        badge: "Naturel",
        bienfaits: [
            "Calme les irritations",
            "Réduit les signes de vieillissement",
            "Combat les bactéries",
            "Unifie le teint"
        ]
    },

    {
        id: 7,
        nom: "Sérum booster d’éclat à la vitamine C",
        prix: 9000,
        description: "Illumine et protège la peau.",
        descriptionDetailler: "Ce sérum riche en vitamine C protège contre les agressions extérieures, stimule le collagène et illumine le teint.",
        image: "7.jpg",
        categorie: "Visage",
        badge: "Glow",
        bienfaits: [
            "Protège contre la pollution",
            "Stimule le collagène",
            "Illumine le teint",
            "Réduit les taches"
        ]
    },

    {
        id: 8,
        nom: "Gel de douche clarifiant et traitant",
        prix: 8000,
        description: "Clarifie, exfolie et protège la peau.",
        descriptionDetailler: "Ce gel de douche combine des agents clarifiants pour réduire les taches et unifier le teint, des agents exfoliants pour éliminer les cellules mortes, des agents hydratants pour nourrir la peau et des agents antibactériens pour prévenir les boutons et infections.",
        image: "8.jpg",
        categorie: "Corps",
        badge: "Traitement",
        bienfaits: [
            "Réduit les taches",
            "Exfolie la peau",
            "Hydrate et nourrit",
            "Protège contre les bactéries"
        ]
    },

    {
        id: 9,
        nom: "Crème corporelle éclat à la vitamine C",
        prix: 12000,
        description: "Hydrate et illumine la peau.",
        descriptionDetailler: "Cette crème corporelle à la vitamine C nourrit et hydrate la peau en profondeur, améliore l'apparence des zones sombres et des taches, illumine le teint et aide à réduire les signes de vieillissement comme les rides.",
        image: "9.jpg",
        categorie: "Corps",
        badge: "Glow",
        bienfaits: [
            "Hydrate intensément",
            "Illumine le teint",
            "Réduit les taches",
            "Lutte contre le vieillissement"
        ]
    },

    {
        id: 10,
        nom: "Crème corporelle réparatrice (Grand modèle)",
        prix: 13000,
        description: "Répare et hydrate intensément la peau.",
        descriptionDetailler: "Riche en céramides, urée, vitamine B5, niacinamide et acide hyaluronique, cette crème corporelle répare la barrière cutanée, restaure les peaux abîmées, hydrate en profondeur, apaise les peaux sensibles et améliore l'élasticité de la peau.",
        image: "10.jpg",
        categorie: "Corps",
        badge: "Réparateur",
        bienfaits: [
            "Répare la barrière cutanée",
            "Restaure les peaux abîmées",
            "Hydrate intensément",
            "Apaise les irritations",
            "Améliore l'élasticité"
        ]
    },

    {
        id: 11,
        nom: "Crème visage éclat à la vitamine C",
        prix: 5000,
        description: "Illumine le teint et protège la peau.",
        descriptionDetailler: "Cette crème visage à la vitamine C protège contre les agressions environnementales, réduit les rides et ridules, illumine le teint et améliore la texture de la peau. Elle est idéale pour les peaux fatiguées, ternes ou pour prévenir les signes de vieillissement.",
        image: "11.jpg",
        categorie: "Visage",
        badge: "Glow",
        bienfaits: [
            "Protège contre la pollution",
            "Réduit les rides",
            "Illumine le teint",
            "Améliore la texture de la peau"
        ]
    },

    {
        id: 12,
        nom: "Crème visage hydratante non comédogène (à l'acide hyaluronique)",
        prix: 5000,
        description: "Hydrate intensément sans boucher les pores.",
        descriptionDetailler: "Grâce à l'acide hyaluronique, cette crème visage hydrate profondément la peau tout en restant non comédogène. Elle retient l'eau dans la peau pour une hydratation durable, lisse les rides et convient parfaitement aux peaux sensibles ou à tendance acnéique.",
        image: "12.jpg",
        categorie: "Visage",
        badge: "Hydratant",
        bienfaits: [
            "Hydratation intense et durable",
            "Ne bouche pas les pores",
            "Convient aux peaux sensibles",
            "Réduit les rides et ridules"
        ]
    },

    {
        id: 13,
        nom: "Glow oil carotte (huile végétale)",
        prix: 5000,
        description: "Nourrit, protège et illumine la peau.",
        descriptionDetailler: "Cette huile végétale à la carotte est riche en caroténoïdes, vitamine A et acides gras. Elle protège la peau contre les agressions extérieures, aide à la régénération cellulaire, nourrit en profondeur et apporte un teint plus lumineux et éclatant.",
        image: "13.jpg",
        categorie: "Corps",
        badge: "Naturel",
        bienfaits: [
            "Protège contre les agressions extérieures",
            "Régénère la peau",
            "Illumine le teint",
            "Nourrit les peaux sèches"
        ]
    },

    {
        id: 14,
        nom: "Crème visage réparatrice",
        prix: 7000,
        description: "Répare et apaise les peaux sensibles.",
        descriptionDetailler: "Cette crème visage réparatrice aide à réparer les dommages cutanés comme les irritations et la sécheresse, restaure la barrière cutanée, améliore l'apparence des rides et des cicatrices et apaise les peaux sensibles. Elle est idéale après une exposition au soleil ou des traitements agressifs.",
        image: "14.jpg",
        categorie: "Visage",
        badge: "Réparateur",
        bienfaits: [
            "Répare les dommages cutanés",
            "Restaure la barrière cutanée",
            "Réduit les rides et cicatrices",
            "Apaise les irritations"
        ]
    }
];

// --- ÉTAT DE L'APPLICATION ---
let panier = [];
const WHATSAPP_NUMERO = "237672948720";

// --- SÉLECTEURS DOM ---
const grilleProduits = document.getElementById('grille-produits');
const badgePanier = document.getElementById('badge-panier');
const boutonPanier = document.getElementById('bouton-panier');
const modalPanier = document.getElementById('modal-panier');
const contenuPanier = document.getElementById('contenu-panier');
const montantTotalPanier = document.getElementById('montant-total-panier');
const piedPanier = document.getElementById('pied-panier');
const boutonCommander = document.getElementById('bouton-commander');

const modalProduit = document.getElementById('modal-produit');
const imageDetailProduit = document.getElementById('image-detail-produit');
const nomDetailProduit = document.getElementById('nom-detail-produit');
const prixDetailProduit = document.getElementById('prix-detail-produit');
const descriptionDetailProduit = document.getElementById('description-detail-produit');
const listeBeneficesProduit = document.getElementById('liste-benefices-produit');
const boutonAjouterPanierModal = document.getElementById('ajouter-panier-modal');

const modalFormulaire = document.getElementById('modal-formulaire');
const boutonOuvrirFormulaire = document.getElementById('bouton-ouvrir-formulaire');
const boutonFooterContact = document.getElementById('bouton-footer-contact');
const formulaireContact = document.getElementById('formulaire-contact');
const etapesProgression = document.querySelectorAll('.etape-progression');
const phasesFormulaire = document.querySelectorAll('.phase-formulaire');

const boutonMenuMobile = document.getElementById('bouton-menu-mobile');
const navigation = document.getElementById('navigation');
const header = document.getElementById('header');
const boutonRetourHaut = document.getElementById('bouton-retour-haut');

// --- INITIALISATION ---
document.addEventListener('DOMContentLoaded', () => {
    afficherProduits();
    ecouterEvenements();
    chargerPanier();
    gererHeader();
});

// --- FONCTIONS PRODUITS ---
function afficherProduits() {
    if (!grilleProduits) return;

    grilleProduits.innerHTML = PRODUITS.map(produit => `
        <article class="carte-produit" data-id="${produit.id}">
            <div class="image-produit">
                <img class="image-produit-carte" src="${produit.image}" alt="${produit.nom}" loading="lazy">
                <span class="badge-produit-naturel">
                    <i class="fas fa-seedling"></i> 100% Naturel
                </span>
                <div class="overlay-produit">
                    <button class="bouton-details-produit" onclick="ouvrirDetailsProduit(${produit.id})">
                        <i class="fas fa-eye"></i> Plus d'info
                    </button>
                </div>
            </div>
            <div class="infos-produit">
                <h3 class="nom-produit-carte">${produit.nom}</h3>
                <p class="prix-produit-carte">${produit.prix.toLocaleString()} FCFA</p>
                <div class="actions-produit-carte">
                    <button class="bouton-details-produit" onclick="ouvrirDetailsProduit(${produit.id})">
                        <i class="fas fa-info-circle"></i> Détails
                    </button>
                    <button class="bouton-ajouter-panier-carte" onclick="ajouterAuPanier(${produit.id})">
                        <i class="fas fa-plus"></i> Ajouter
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

function ouvrirDetailsProduit(id) {
    const produit = PRODUITS.find(p => p.id === id);
    if (!produit) return;

    imageDetailProduit.src = produit.image;
    imageDetailProduit.alt = produit.nom;
    nomDetailProduit.textContent = produit.nom;
    prixDetailProduit.textContent = `${produit.prix.toLocaleString()} FCFA`;
    descriptionDetailProduit.textContent = produit.descriptionDetailler;

    listeBeneficesProduit.innerHTML = produit.bienfaits.map(b => `
        <li><i class="fas fa-check"></i> ${b}</li>
    `).join('');

    boutonAjouterPanierModal.onclick = () => {
        ajouterAuPanier(produit.id);
        fermerModal('modal-produit');
    };

    ouvrirModal('modal-produit');
}

// --- FONCTIONS PANIER ---
function ajouterAuPanier(id) {
    const produit = PRODUITS.find(p => p.id === id);
    if (!produit) return;

    const index = panier.findIndex(item => item.id === id);

    if (index !== -1) {
        panier[index].quantite++;
    } else {
        panier.push({...produit, quantite: 1 });
    }

    sauvegarderPanier();
    mettreAJourAffichagePanier();

    // Feedback visuel
    notifier(`"${produit.nom}" ajouté au panier`);
}

function modifierQuantite(id, delta) {
    const index = panier.findIndex(item => item.id === id);
    if (index === -1) return;

    panier[index].quantite += delta;

    if (panier[index].quantite <= 0) {
        const produitSupprime = panier[index].nom;
        panier.splice(index, 1);
        notifier(`"${produitSupprime}" retiré du panier`);
    }

    sauvegarderPanier();
    mettreAJourAffichagePanier();
}

function supprimerDuPanier(id) {
    panier = panier.filter(item => item.id !== id);
    sauvegarderPanier();
    mettreAJourAffichagePanier();
}

function mettreAJourAffichagePanier() {
    const totalArticles = panier.reduce((acc, item) => acc + item.quantite, 0);
    badgePanier.textContent = totalArticles;

    if (panier.length === 0) {
        contenuPanier.innerHTML = `
            <div class="panier-vide">
                <i class="fas fa-shopping-basket"></i>
                <p>Votre panier est vide</p>
                <button class="bouton-principal" onclick="fermerModal('modal-panier')">
                    Continuer mes achats
                </button>
            </div>
        `;
        piedPanier.style.display = 'none';
    } else {
        contenuPanier.innerHTML = panier.map(item => `
            <div class="item-panier">
                <div class="info-item-panier">
                    <span class="nom-item-panier">${item.nom}</span>
                    <span class="prix-item-panier">${item.prix.toLocaleString()} FCFA</span>
                </div>
                <div class="actions-item-panier">
                    <div class="controles-quantite">
                        <button class="bouton-quantite" onclick="modifierQuantite(${item.id}, -1)"><i class="fas fa-minus"></i></button>
                        <span class="valeur-quantite">${item.quantite}</span>
                        <button class="bouton-quantite" onclick="modifierQuantite(${item.id}, 1)"><i class="fas fa-plus"></i></button>
                    </div>
                </div>
            </div>
        `).join('');

        const total = panier.reduce((acc, item) => acc + (item.prix * item.quantite), 0);
        montantTotalPanier.textContent = `${total.toLocaleString()} FCFA`;
        piedPanier.style.display = 'block';
    }
}

function passerCommande() {
    if (panier.length === 0) return;

    let message = `🌿 *COMMANDE NATURA GLOW*\n\n`;
    message += `Bonjour, je souhaite passer la commande suivante :\n\n`;

    panier.forEach(item => {
        message += `• *${item.nom}*\n`;
        message += `  Quantité : ${item.quantite}\n`;
        message += `  Prix : ${(item.prix * item.quantite).toLocaleString()} FCFA\n\n`;
    });

    const total = panier.reduce((acc, item) => acc + (item.prix * item.quantite), 0);
    message += `💰 *TOTAL : ${total.toLocaleString()} FCFA*\n\n`;
    message += `Merci de me confirmer la disponibilité et les modalités de livraison.`;

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// --- FONCTIONS FORMULAIRE (MULTIPHASE) ---
let phaseActuelle = 1;

function gererPhases(direction) {
    if (direction === 'suivant') {
        if (validerPhase(phaseActuelle)) {
            phaseActuelle++;
        }
    } else {
        phaseActuelle--;
    }

    mettreAJourUIFormulaire();
}

function validerPhase(phase) {
    const phaseElement = document.querySelector(`.phase-formulaire[data-phase="${phase}"]`);
    const inputs = phaseElement.querySelectorAll('input, select, textarea');
    let valide = true;

    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            valide = false;
            input.classList.add('erreur');
        } else {
            input.classList.remove('erreur');
        }
    });

    return valide;
}

function mettreAJourUIFormulaire() {
    phasesFormulaire.forEach(phase => {
        phase.classList.toggle('phase-active', parseInt(phase.dataset.phase) === phaseActuelle);
    });

    etapesProgression.forEach(etape => {
        const num = parseInt(etape.dataset.etape);
        etape.classList.toggle('etape-active', num === phaseActuelle);
        etape.classList.toggle('etape-complete', num < phaseActuelle);
    });
}

function envoyerContact(e) {
    e.preventDefault();

    const formData = new FormData(formulaireContact);
    const nom = formData.get('nom');
    const email = formData.get('email');
    const ville = formData.get('ville');
    const quartier = formData.get('quartier') || 'Non précisé';
    const sujet = formData.get('sujet');
    const messageContenu = formData.get('message');

    let message = `📨 *NOUVEAU CONTACT NATURA GLOW*\n\n`;
    message += `👤 *Identité :* ${nom}\n`;
    message += `📧 *Email :* ${email}\n`;
    message += `📍 *Localisation :* ${ville} (${quartier})\n`;
    message += `📌 *Sujet :* ${sujet}\n\n`;
    message += `💬 *Message :*\n${messageContenu}`;

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    // Reset
    formulaireContact.reset();
    phaseActuelle = 1;
    mettreAJourUIFormulaire();
    fermerModal('modal-formulaire');
}

// --- UTILITAIRES ---
function ouvrirModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function fermerModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

function ecouterEvenements() {
    // Bouton panier
    boutonPanier.addEventListener('click', () => ouvrirModal('modal-panier'));

    // Fermer modals
    document.querySelectorAll('.bouton-fermer-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            const modal = btn.closest('.modal-overlay');
            fermerModal(modal.id);
        });
    });

    // Fermer modal en cliquant sur l'overlay
    document.querySelectorAll('.modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) fermerModal(overlay.id);
        });
    });

    // Formulaire Contact
    boutonOuvrirFormulaire.addEventListener('click', () => ouvrirModal('modal-formulaire'));
    boutonFooterContact.addEventListener('click', () => ouvrirModal('modal-formulaire'));

    document.querySelectorAll('.bouton-suivant, .bouton-precedent').forEach(btn => {
        btn.addEventListener('click', () => gererPhases(btn.dataset.direction));
    });

    formulaireContact.addEventListener('submit', envoyerContact);

    // Commande WhatsApp
    boutonCommander.addEventListener('click', passerCommande);

    // Menu Mobile
    boutonMenuMobile.addEventListener('click', () => {
        boutonMenuMobile.classList.toggle('actif');
        navigation.classList.toggle('active');
    });

    // Fermer menu mobile au clic sur un lien
    document.querySelectorAll('.lien-nav').forEach(lien => {
        lien.addEventListener('click', () => {
            boutonMenuMobile.classList.remove('actif');
            navigation.classList.remove('active');
        });
    });

    // Retour en haut
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            boutonRetourHaut.classList.add('visible');
        } else {
            boutonRetourHaut.classList.remove('visible');
        }
        gererHeader();
    });

    boutonRetourHaut.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function gererHeader() {
    if (window.scrollY > 50) {
        header.classList.remove('transparent');
    } else {
        header.classList.add('transparent');
    }
}

function sauvegarderPanier() {
    localStorage.setItem('natura_glow_panier', JSON.stringify(panier));
}

function chargerPanier() {
    const sauve = localStorage.getItem('natura_glow_panier');
    if (sauve) {
        panier = JSON.parse(sauve);
        mettreAJourAffichagePanier();
    }
}

function notifier(msg) {
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>${msg}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.classList.add('active');
        setTimeout(() => {
            toast.classList.remove('active');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }, 100);
}

// Exposer les fonctions globales pour le HTML (inline onclick)
window.ajouterAuPanier = ajouterAuPanier;
window.ouvrirDetailsProduit = ouvrirDetailsProduit;
window.modifierQuantite = modifierQuantite;
window.supprimerDuPanier = supprimerDuPanier;
window.modifierQuantite = modifierQuantite;
window.supprimerDuPanier = supprimerDuPanier;
window.fermerModal = fermerModal;