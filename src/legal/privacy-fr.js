// Politique de confidentialité (français).
// Version par défaut (/privacy). La version anglaise est servie à /privacy?lang=en.
// Les identifiants des articles et sous-articles doivent rester identiques à privacy-en.js.
// Les espaces insécables (« », :, $) sont ajoutées à l’affichage par LegalPage.

const OFFICER_ROWS = [
  ['Responsable', 'Shervin Soleimani, fondateur'],
  ['Courriel', '[info@airstayproperties.com](mailto:info@airstayproperties.com) (objet : « Confidentialité »)'],
  ['Adresse postale', 'AirStay Properties Inc., à l’attention du responsable de la protection des renseignements personnels, 610, rue Granville, bureau 1915, Vancouver (Colombie-Britannique) V6C 3T3'],
]

const privacy = {
  lang: 'fr',
  ui: { language: 'Langue', contents: 'Table des matières', backToContents: 'Retour à la table des matières' },
  eyebrow: 'Juridique',
  title: 'Politique de',
  titleAccent: 'confidentialité',
  intro: 'Comment AirStay Properties recueille, utilise, communique et protège les renseignements personnels, et comment vous pouvez exercer vos droits.',
  meta: ['Version 1.0', 'Dernière mise à jour : 20 novembre 2026'],
  languageNote: 'Le présent document est offert en français et en anglais. En cas de divergence, la version française prévaut.',

  sections: [
    {
      id: 'scope',
      title: 'Qui nous sommes et portée de la présente politique',
      blocks: [
        'AirStay Properties Inc. (« AirStay », « nous », « notre » ou « nos ») est une société constituée en vertu des lois de la Colombie-Britannique, dont le siège social est situé au 610, rue Granville, bureau 1915, Vancouver (Colombie-Britannique) V6C 3T3 (numéro d’entreprise du Québec (NEQ) : immatriculation en cours). Nous exerçons nos activités à Montréal (Québec), où nous gérons des résidences locatives de courte et de longue durée pour le compte de leurs propriétaires et offrons des services de gestion immobilière et des services connexes, et nous étendons nos activités à Vancouver.',
        'La présente politique explique comment nous traitons les renseignements personnels, c’est-à-dire tout renseignement qui concerne une personne physique et permet, directement ou indirectement, de l’identifier. Elle s’applique aux renseignements que nous recueillons au moyen du site airstayproperties.com (le « site Web ») et de notre site de réservation book.airstayproperties.com (le « site de réservation »), dans le cadre des réservations directes et des réservations effectuées par l’intermédiaire de plateformes, pendant les séjours, dans nos communications avec les voyageurs, les propriétaires et les clients de services, ainsi que dans le cadre du recrutement.',
        'Nous appliquons la Loi sur la protection des renseignements personnels dans le secteur privé (Québec), telle que modifiée par la Loi 25, la Loi sur la protection des renseignements personnels et les documents électroniques (Canada) et, lorsqu’elle s’applique, la Personal Information Protection Act (Colombie-Britannique).',
        'Lorsque vous réservez par l’intermédiaire d’une plateforme comme Airbnb, Vrbo, Booking.com, Expedia, Hotels.com ou Hopper, cette plateforme recueille et traite également vos renseignements conformément à sa propre politique de confidentialité.',
      ],
    },

    {
      id: 'privacy-officer',
      title: 'Responsable de la protection des renseignements personnels',
      blocks: [
        'Notre responsable de la protection des renseignements personnels est Shervin Soleimani, fondateur. Il veille au respect des lois sur la protection des renseignements personnels, approuve nos politiques de gouvernance et traite les demandes d’accès et de rectification ainsi que les plaintes.',
        { rows: OFFICER_ROWS },
      ],
    },

    {
      id: 'governance',
      title: 'Nos politiques de gouvernance',
      blocks: [
        'Nos politiques et pratiques encadrant la gouvernance des renseignements personnels prévoient notamment ce qui suit :',
        {
          list: [
            '**Accès selon les fonctions.** Les membres de l’équipe et les sous-traitants n’ont accès aux renseignements personnels que lorsque leurs fonctions l’exigent et sont tenus à la confidentialité.',
            '**Registre des incidents.** Nous tenons un registre des incidents de confidentialité et prenons des mesures pour diminuer les risques de préjudice (voir l’article 13).',
            '**Évaluations des facteurs relatifs à la vie privée.** Nous procédons à une évaluation des facteurs relatifs à la vie privée avant de retenir un nouveau fournisseur de services appelé à traiter des renseignements personnels, avant toute communication de renseignements personnels à l’extérieur du Québec et avant d’acquérir, de développer ou de refondre un système d’information ou une prestation électronique de services impliquant des renseignements personnels.',
            '**Durées de conservation.** Nous fixons une durée de conservation pour chaque catégorie de renseignements et, à son terme, nous les détruisons de façon sécuritaire ou les anonymisons (voir l’article 10).',
            '**Fournisseurs de services.** Les fournisseurs qui traitent des renseignements personnels pour notre compte doivent les protéger en vertu d’une entente écrite, ne les utiliser que pour l’exécution de leur mandat et les remettre ou les détruire à la fin de celui-ci.',
            '**Demandes et plaintes.** Les demandes et les plaintes sont traitées par écrit par le responsable de la protection des renseignements personnels, qui y répond dans un délai de 30 jours.',
          ],
        },
        'Toute question au sujet de ces politiques peut être adressée à notre responsable de la protection des renseignements personnels (article 2).',
      ],
    },

    {
      id: 'collection',
      title: 'Renseignements que nous recueillons',
      blocks: [
        'Nous recueillons des renseignements personnels directement auprès de vous, auprès des plateformes de réservation et des fournisseurs de services qui agissent pour notre compte, ainsi qu’auprès des personnes que vous autorisez. Les renseignements recueillis dépendent de la nature de vos interactions avec nous.',

        { h: 'Formulaires et fichiers téléversés sur le site Web', id: 'forms' },
        'Lorsque vous communiquez avec nous, demandez une réservation, soumettez une demande de propriétaire, de location de longue durée ou de services, ou posez votre candidature à un emploi, nous recueillons vos nom, adresse courriel et numéro de téléphone, ainsi que les renseignements que vous choisissez de fournir, comme votre ville, l’adresse de la propriété et ses caractéristiques, les dates et le nombre de voyageurs, votre budget ou la date d’emménagement souhaitée, votre message et tout fichier que vous téléversez (par exemple des photos, des documents, un curriculum vitæ ou un portfolio). Nous enregistrons aussi la page à partir de laquelle le formulaire a été envoyé et l’heure d’envoi, et nous utilisons des indicateurs techniques limités pour filtrer les pourriels.',
        'Si vous cochez la case Messages texte, nous conservons une preuve de votre consentement : votre choix, la date et l’heure, le numéro de téléphone et le texte exact de la case affichée.',
        'Ne téléversez aucune pièce d’identité ni aucun renseignement de paiement au moyen des formulaires du site Web.',

        { h: 'Réservations et séjours', id: 'bookings' },
        'Pour une réservation, nous recueillons le nom et les coordonnées du voyageur responsable, les dates du séjour, la résidence, le nombre de voyageurs, le prix et l’état du paiement, les demandes particulières ainsi que nos communications avant, pendant et après le séjour. Les paiements sont traités par notre fournisseur de services de paiement : nous recevons des renseignements limités sur la carte, comme le type de carte et ses quatre derniers chiffres, mais jamais le numéro complet. Nous conservons également les registres d’arrivée et de départ ainsi que les rapports d’incident ou de dommages, y compris les photos. Lorsque vous acceptez nos conditions et le contrat d’hébergement, nous consignons la date et l’heure, l’adresse IP utilisée et la version des documents acceptés, à titre de preuve de votre acceptation.',

        { h: 'Vérification d’identité', id: 'verification' },
        'Pour les réservations directes et pour les réservations Vrbo, Expedia ou Hotels.com dont AirStay traite le paiement, le voyageur responsable remplit notre formulaire d’enregistrement en ligne. Ce formulaire recueille une pièce d’identité avec photo délivrée par une autorité gouvernementale (son image et des renseignements comme votre nom, votre date de naissance, le numéro du document et sa date d’expiration) et comporte une vérification d’identité effectuée par l’intermédiaire de notre fournisseur de services de paiement, qui agit également comme fournisseur de services de vérification d’identité. Ces renseignements sont sensibles : nous ne les recueillons qu’avec votre consentement exprès et ne les utilisons que pour vérifier votre identité, prévenir la fraude et répondre aux contestations, rétrofacturations et réclamations.',
        'Pour les réservations effectuées par l’intermédiaire de plateformes tierces, nous respectons les politiques de chaque plateforme. Lorsqu’une plateforme ne nous permet pas de recueillir des pièces d’identité, nous ne les recueillons pas.',

        { h: 'Vérification biométrique', id: 'biometrics' },
        'La vérification d’identité peut comparer une photo de votre visage (égoportrait) avec la photo de votre pièce d’identité. Nous n’utilisons la comparaison faciale qu’avec votre consentement exprès, et nous offrons une solution de rechange non biométrique : une vérification manuelle de votre identité par notre équipe. L’égoportrait est conservé avec votre fiche, comme le décrit l’article sur la conservation.',

        { h: 'Serrures intelligentes et caméras de sécurité', id: 'locks-cameras' },
        'Nos résidences sont munies de serrures intelligentes qui utilisent un code unique pour chaque voyageur. Nous conservons les registres d’accès de la porte (la date et l’heure de chaque entrée) et pouvons les utiliser pour la sécurité, le règlement des différends et les réclamations, notamment en les communiquant, au besoin, aux plateformes de réservation, aux fournisseurs de services de paiement ou aux assureurs.',
        'Certains immeubles sont munis de caméras de sécurité dans certaines aires communes, comme les corridors et les entrées. Elles servent à la sécurité et aux enquêtes sur les incidents. Il n’y a jamais de caméra à l’intérieur des logements.',

        { h: 'Renseignements provenant des plateformes de réservation', id: 'platforms' },
        'Lorsque vous réservez par l’intermédiaire d’une plateforme, celle-ci nous transmet les renseignements nécessaires à la gestion de votre séjour, comme votre nom, les coordonnées qu’elle fournit, les dates et le nombre de voyageurs, le montant de la réservation et les messages que vous nous envoyez.',

        { h: 'Propriétaires et clients de services', id: 'owners' },
        'Nous recueillons le nom et les coordonnées des propriétaires, des renseignements sur l’immeuble, sur son titre de propriété et sur leur pouvoir d’agir et, dans le cadre d’une entente de gestion, les renseignements nécessaires pour verser les revenus et en rendre compte, comme les coordonnées bancaires et les numéros d’inscription aux fins des taxes.',

        { h: 'Candidats à un emploi', id: 'applicants' },
        'Nous recueillons les renseignements contenus dans votre candidature, comme votre curriculum vitæ, votre portfolio, votre message de présentation et le poste qui vous intéresse, ainsi que nos notes d’entrevue. Nous ne communiquons avec vos références qu’avec votre permission.',

        { h: 'Candidats à une location de longue durée', id: 'rental-applicants' },
        'Si vous présentez une demande de location de longue durée, nous recueillons les renseignements nécessaires pour évaluer votre demande et préparer le bail, dans les limites permises par la loi.',

        { h: 'Renseignements concernant d’autres personnes', id: 'others' },
        'Si vous nous communiquez des renseignements concernant d’autres personnes, comme les voyageurs qui vous accompagnent ou les copropriétaires d’une propriété, veuillez vous assurer d’y être autorisé et que ces personnes sont informées de la présente politique.',

        { h: 'Renseignements techniques du site Web', id: 'technical' },
        'Lorsque vous visitez le site Web, notre hébergeur reçoit automatiquement des renseignements techniques comme votre adresse IP, le type de navigateur, les pages demandées ainsi que la date et l’heure. Ces renseignements servent à afficher le site Web, à en assurer la sécurité et à prévenir les abus. Le service qui fournit les polices de caractères de notre site Web reçoit également votre adresse IP. Voir l’article 11 au sujet des témoins.',
      ],
    },

    {
      id: 'purposes',
      title: 'Pourquoi nous les utilisons',
      blocks: [
        'Nous utilisons les renseignements personnels pour :',
        {
          list: [
            'répondre à vos demandes et fournir les soumissions, évaluations et services que vous demandez;',
            'traiter, confirmer et gérer les réservations, transmettre les instructions d’accès et vous assister avant, pendant et après votre séjour;',
            'vérifier l’identité des voyageurs et prévenir la fraude, l’occupation non autorisée et les dommages;',
            'assurer la sécurité de nos résidences et de nos immeubles et enquêter sur les incidents, notamment au moyen des registres d’accès des serrures et des caméras de sécurité de certaines aires communes;',
            'traiter les paiements, les préautorisations, les remboursements et les frais documentés, et répondre aux contestations de paiement, aux rétrofacturations et aux réclamations;',
            'gérer les propriétés pour le compte de leurs propriétaires, y compris les relevés de revenus et les rapports d’incident;',
            'évaluer les candidatures à un emploi et les demandes de location;',
            'exploiter, sécuriser et améliorer le site Web et nos services;',
            'respecter nos obligations légales, notamment en matière fiscale, comptable et d’hébergement touristique, et établir, exercer ou défendre des droits en justice;',
            'vous transmettre des nouvelles ou des offres, uniquement si vous avez accepté de les recevoir, avec un moyen simple de vous désabonner dans chaque message, conformément à la Loi canadienne anti-pourriel.',
          ],
        },
        'Nous n’utilisons les renseignements personnels qu’à ces fins, à des fins compatibles ou avec votre consentement, sauf si la loi permet ou exige autre chose.',
      ],
    },

    {
      id: 'consent',
      title: 'Consentement',
      blocks: [
        'Nous recueillons, utilisons et communiquons les renseignements personnels avec votre consentement, sauf lorsque la loi permet ou exige autre chose. Nous demandons votre consentement en termes simples et clairs, à des fins précises, et distinctement de toute autre information.',
        'Nous obtenons votre consentement exprès avant de recueillir ou d’utiliser des renseignements sensibles, comme les pièces d’identité et la comparaison de l’image de votre visage avec votre pièce d’identité. Lorsque vous nous envoyez un formulaire ou un message, vous consentez à ce que nous utilisions ces renseignements pour vous répondre et donner suite à votre demande.',
        'Vous pouvez retirer votre consentement en tout temps en écrivant à notre responsable de la protection des renseignements personnels, sous réserve des restrictions légales et contractuelles. Le retrait de votre consentement peut nous empêcher de fournir un service : par exemple, si la vérification d’identité n’est pas effectuée pour une réservation qui l’exige, la réservation peut être annulée conformément à la politique d’annulation applicable. Vous pouvez choisir une vérification manuelle plutôt que la comparaison faciale.',
        'Le consentement concernant un mineur de moins de 14 ans doit être donné par le titulaire de l’autorité parentale ou le tuteur.',
      ],
    },

    {
      id: 'automation',
      title: 'Décisions automatisées et outils assistés par l’intelligence artificielle',
      blocks: [
        'Nous ne prenons aucune décision vous concernant fondée exclusivement sur un traitement automatisé de vos renseignements personnels. Si nous devions le faire, nous vous en informerions au plus tard au moment de la décision. Vous pourriez alors demander quels renseignements personnels ont été utilisés et quels sont les raisons et les principaux facteurs ayant mené à la décision, faire rectifier ces renseignements et présenter vos observations à un membre de notre équipe en mesure de réviser la décision.',
        'La vérification d’identité fait appel à des outils automatisés de notre fournisseur de services de vérification d’identité, mais toute vérification échouée ou non concluante est examinée par un membre de notre équipe avant qu’une décision soit prise au sujet de votre réservation. Notre fournisseur de services de paiement peut aussi utiliser des outils automatisés de prévention de la fraude lors du traitement des paiements.',
        'Nous pouvons utiliser des logiciels, y compris des outils assistés par l’intelligence artificielle, pour nous aider à gérer les réservations et à répondre aux messages. Ces outils sont utilisés sous supervision humaine, et les décisions qui vous touchent de façon importante, comme le refus ou l’annulation d’une réservation ou un débit pour des dommages, sont prises par un membre de notre équipe.',
      ],
    },

    {
      id: 'sharing',
      title: 'Avec qui nous les communiquons',
      blocks: [
        'Nous ne vendons ni ne louons de renseignements personnels. Nous les communiquons uniquement dans la mesure nécessaire aux fins décrites ci-dessus, aux destinataires suivants :',
        {
          list: [
            '**les plateformes de réservation** par l’intermédiaire desquelles vous réservez, pour gérer la réservation et, au besoin, pour régler un différend ou une réclamation;',
            '**notre plateforme de réservation**, un système tiers de gestion immobilière et de réservation qui héberge le site de réservation, la messagerie avec les voyageurs et l’enregistrement en ligne;',
            '**notre fournisseur de services de paiement**, qui traite les paiements et la vérification d’identité, ainsi que les émetteurs de cartes en cas de contestation d’un débit, comme le prévoient nos [conditions](/terms?lang=fr);',
            '**les fournisseurs de services de communication et de courriel**, y compris celui qui achemine à notre équipe les formulaires envoyés au moyen du site Web;',
            '**notre hébergeur Web** et d’autres fournisseurs technologiques, comme des logiciels de stockage de documents, de productivité et d’assistance par l’intelligence artificielle;',
            '**le personnel et les sous-traitants d’entretien ménager, d’entretien et d’exploitation**, qui ne reçoivent que ce dont ils ont besoin pour préparer et entretenir une résidence;',
            '**le propriétaire de la résidence** où vous séjournez ou qui fait l’objet de votre demande, pour des renseignements limités sur la réservation, les revenus et les incidents;',
            '**les gestionnaires d’immeubles ou les syndicats de copropriété**, lorsque les règlements de l’immeuble l’exigent ou pour gérer un incident;',
            '**les assureurs et nos conseillers professionnels**, comme nos avocats et comptables, tenus à la confidentialité, par exemple en cas de réclamation;',
            '**les autorités publiques**, lorsque la loi l’exige ou le permet, par exemple en vertu d’une ordonnance judiciaire ou pour prévenir un acte de violence;',
            '**un acquéreur ou un successeur** dans le cadre d’une transaction commerciale, en vertu d’une entente qui protège les renseignements, comme le permet la loi.',
          ],
        },
        'Les fournisseurs de services agissent en vertu d’ententes écrites qui les obligent à protéger les renseignements, à ne les utiliser que pour l’exécution de leur mandat et à les remettre ou à les détruire à la fin de celui-ci.',
      ],
    },

    {
      id: 'transfers',
      title: 'Conservation et communication à l’extérieur du Québec',
      blocks: [
        'Certains de nos fournisseurs de services conservent ou traitent des renseignements personnels à l’extérieur du Québec, ailleurs au Canada ou à l’étranger, notamment aux États-Unis. Par exemple, le site Web est hébergé par un fournisseur infonuagique situé à l’extérieur du Québec, et les formulaires envoyés au moyen du site Web sont acheminés à notre équipe par un fournisseur de services de courriel situé à l’extérieur du Québec.',
        'Avant de communiquer des renseignements personnels à l’extérieur du Québec, nous procédons à une évaluation des facteurs relatifs à la vie privée qui tient compte de la sensibilité des renseignements, des fins de leur utilisation, des mesures de protection, y compris contractuelles, et du régime juridique applicable dans l’État où ils seront traités. Nous ne les communiquons que si l’évaluation démontre qu’ils bénéficieront d’une protection adéquate, et en vertu d’une entente écrite. Les renseignements conservés à l’extérieur du Québec peuvent être accessibles aux autorités de cet endroit en vertu des lois qui y sont applicables.',
      ],
    },

    {
      id: 'retention',
      title: 'Durée de conservation',
      blocks: [
        '**Pièces d’identité.** Lors de l’enregistrement en ligne, nous recueillons une photo de votre pièce d’identité, un égoportrait, le numéro de la pièce et votre date de naissance. Ces renseignements sont conservés dans la fiche du voyageur de notre plateforme de réservation et servent à confirmer votre identité, à prévenir la fraude et à répondre aux contestations, rétrofacturations et réclamations. Ils sont conservés jusqu’à trois ans après votre départ, soit le délai de prescription applicable aux réclamations (art. 2925 C.c.Q.), ou plus longtemps tant qu’une réclamation est en cours, puis détruits ou anonymisés. L’accès est limité aux membres de l’équipe qui en ont besoin, et ces renseignements ne sont jamais transmis par courriel ni par messagerie.',
        '**Comparaison faciale.** L’égoportrait est conservé avec votre fiche, comme le décrit le paragraphe précédent.',
        '**Dossiers de réservation et éléments de preuve.** Les renseignements sur la réservation, les preuves de votre acceptation de nos conditions, les messages et les résultats de la vérification sont conservés pendant au moins 180 jours après le départ, ou plus longtemps tant qu’une contestation, une rétrofacturation ou une réclamation est en cours, et plus longtemps lorsque la loi l’exige. Les registres d’accès de la serrure sont conservés selon les paramètres de notre fournisseur de serrures intelligentes et, lorsqu’ils se rapportent à une contestation ou à une réclamation, aussi longtemps que nécessaire.',
        '**Consentement aux messages texte.** Les preuves de consentement aux messages texte sont conservées tant que vous êtes inscrit et pendant 3 ans après votre désabonnement.',
        '**Autres renseignements.** Nous ne conservons les autres renseignements personnels que le temps nécessaire à la réalisation des fins pour lesquelles ils ont été recueillis, y compris le règlement des différends et des réclamations, ou plus longtemps lorsque la loi l’exige, par exemple pour les documents fiscaux et comptables.',
        'Lorsque les renseignements ne sont plus nécessaires, nous les détruisons de façon sécuritaire ou les anonymisons conformément à la loi.',
      ],
    },

    {
      id: 'cookies',
      title: 'Témoins et technologies similaires',
      blocks: [
        'Notre site Web n’utilise que des témoins essentiels, nécessaires à son fonctionnement et à sa sécurité. Il n’utilise aucun témoin d’analyse ni aucun témoin publicitaire; c’est pourquoi nous n’affichons pas de bandeau de consentement aux témoins.',
        'Si nous ajoutons des outils d’analyse à l’avenir, ils demeureront désactivés tant que vous ne les aurez pas acceptés, et l’option de refus sera aussi visible que l’option d’acceptation. Nous mettrons également à jour la présente politique.',
        'Le site de réservation est exploité sur une plateforme tierce qui a ses propres paramètres de témoins, décrits sur ce site. Vous pouvez aussi contrôler ou supprimer les témoins au moyen des paramètres de votre navigateur.',
      ],
    },

    {
      id: 'security',
      title: 'Sécurité',
      blocks: [
        'Nous appliquons des mesures de sécurité administratives, techniques et physiques adaptées à la sensibilité des renseignements, comme l’accès selon les fonctions, l’authentification renforcée lorsqu’elle est offerte, le chiffrement des données en transit et le recours à des fournisseurs reconnus. Les pièces d’identité ne sont traitées qu’au moyen de notre enregistrement en ligne sécurisé.',
        'Veuillez ne pas transmettre de pièces d’identité ni de numéros de carte de paiement par courriel, message texte, clavardage ou formulaire du site Web.',
        'Aucune méthode de transmission ou de stockage n’est entièrement sécuritaire, mais nous nous efforçons de protéger vos renseignements et d’améliorer nos mesures de protection.',
      ],
    },

    {
      id: 'incidents',
      title: 'Incidents de confidentialité',
      blocks: [
        'Si nous avons des motifs de croire qu’un incident de confidentialité s’est produit (accès, utilisation ou communication non autorisés de renseignements personnels, ou leur perte), nous prenons promptement des mesures raisonnables pour diminuer les risques de préjudice et éviter que de nouveaux incidents se produisent. Nous consignons chaque incident dans notre registre. Si un incident présente un risque de préjudice sérieux, nous avisons promptement la Commission d’accès à l’information et les personnes concernées, ainsi que le Commissariat à la protection de la vie privée du Canada et toute autre autorité lorsque la loi l’exige.',
      ],
    },

    {
      id: 'rights',
      title: 'Vos droits',
      blocks: [
        'Sous réserve de la loi, vous avez le droit :',
        {
          list: [
            'd’accéder aux renseignements personnels que nous détenons à votre sujet et d’en obtenir une copie;',
            'de faire rectifier des renseignements inexacts, incomplets ou équivoques, et de faire supprimer des renseignements dont la collecte, la communication ou la conservation ne sont pas autorisées par la loi;',
            'de retirer votre consentement à l’utilisation ou à la communication de vos renseignements;',
            'de nous demander de cesser de diffuser vos renseignements ou de désindexer tout hyperlien rattaché à votre nom, lorsque la loi le permet;',
            'de recevoir les renseignements personnels informatisés que vous nous avez fournis dans un format technologique structuré et couramment utilisé, ou de les faire communiquer à une personne ou à un organisme que vous désignez;',
            'd’être informé des renseignements personnels utilisés pour rendre une décision fondée exclusivement sur un traitement automatisé et de présenter vos observations;',
            'de connaître les catégories de personnes qui, chez AirStay, ont accès à vos renseignements, ainsi que leur durée de conservation;',
            'de porter plainte auprès de nous et de l’autorité compétente.',
          ],
        },
        'Pour exercer un droit, écrivez à notre responsable de la protection des renseignements personnels. Nous pourrions vous demander de confirmer votre identité. Nous vous aiderons au besoin à formuler votre demande et vous répondrons par écrit dans les 30 jours suivant sa réception. L’accès est gratuit; des frais raisonnables peuvent toutefois être exigés pour la transcription, la reproduction ou la transmission des renseignements, et nous vous en indiquerons le montant avant de traiter la demande. Si nous refusons une demande, nous vous en expliquerons les motifs et vous indiquerons vos recours.',
        'Vous pouvez porter plainte auprès de la Commission d’accès à l’information du Québec ([cai.gouv.qc.ca](https://www.cai.gouv.qc.ca)), du Commissariat à la protection de la vie privée du Canada ([priv.gc.ca](https://www.priv.gc.ca)) ou, pour les questions relevant du droit de la Colombie-Britannique, de l’Office of the Information and Privacy Commissioner for British Columbia ([oipc.bc.ca](https://www.oipc.bc.ca)). Nous vous invitons à communiquer d’abord avec nous afin que nous puissions tenter de régler votre préoccupation.',
      ],
    },

    {
      id: 'children',
      title: 'Enfants',
      blocks: [
        'Le site Web et nos services s’adressent aux adultes. Nous ne recueillons pas sciemment de renseignements personnels concernant des enfants de moins de 14 ans sans le consentement du titulaire de l’autorité parentale ou du tuteur. Les réservations doivent être effectuées par un voyageur responsable âgé d’au moins 18 ans.',
      ],
    },

    {
      id: 'changes',
      title: 'Modifications de la présente politique',
      blocks: [
        'Nous pouvons mettre à jour la présente politique pour tenir compte de l’évolution de nos pratiques ou de la loi. La version à jour est publiée sur cette page avec une nouvelle date de dernière mise à jour. Si les modifications sont importantes, nous vous en informerons au moyen du site Web ou par tout autre moyen approprié.',
      ],
    },

    // Sections 17 and 18 (SMS): Daniel's final French wording, Nov 20, 2026. STOP and HELP until Dialpad confirms ARRÊT and AIDE.
    {
      id: 'sms',
      title: 'Messages texte (SMS)',
      blocks: [
        'Aucun renseignement relatif à votre téléphone mobile ne sera communiqué à des tiers ou à des sociétés affiliées à des fins de marketing ou de promotion. Toutes les catégories ci-dessus excluent les données d’adhésion aux messages texte et le consentement recueillis par l’expéditeur; ces renseignements ne seront communiqués à aucun tiers, sauf aux fournisseurs de services qui transmettent les messages pour notre compte (notre fournisseur de téléphonie et de messagerie et les opérateurs mobiles), qui ne peuvent les utiliser qu’à cette fin.',
      ],
    },

    {
      id: 'sms-terms',
      title: 'Conditions des messages texte (SMS)',
      blocks: [
        'En cochant la case Messages texte, vous acceptez de recevoir des messages d’AirStay Properties concernant les confirmations de réservation, les renseignements d’arrivée, les avis liés à votre séjour et le soutien aux voyageurs. Nous n’envoyons pas de messages texte de marketing. La fréquence des messages varie. Des frais de messagerie texte et de données peuvent s’appliquer. Vous pouvez vous désabonner en tout temps en répondant STOP; vous recevrez un message de confirmation, puis plus aucun message. Pour obtenir de l’aide, répondez HELP à n’importe quel message ou communiquez avec notre service à la clientèle au [(604) 256-2560](tel:+16042562560) ou à [info@airstayproperties.com](mailto:info@airstayproperties.com). Les opérateurs mobiles ne sont pas responsables des messages retardés ou non livrés.',
      ],
    },

    {
      id: 'contact',
      title: 'Nous joindre',
      blocks: [
        'Pour toute question, demande ou plainte concernant la présente politique ou vos renseignements personnels, veuillez communiquer avec notre responsable de la protection des renseignements personnels :',
        { rows: OFFICER_ROWS },
      ],
    },
  ],

  closing: 'AirStay Properties Inc. · Politique de confidentialité · Version du 20 novembre 2026',
}

export default privacy
