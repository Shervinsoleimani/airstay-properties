// Conditions d’utilisation et de réservation (français).
// Version par défaut (/terms). La version anglaise est servie à /terms?lang=en.
// Les identifiants des articles et sous-articles doivent rester identiques à terms-en.js.
// Les espaces insécables (« », :, $, 16 h) sont ajoutées à l’affichage par LegalPage.

const terms = {
  lang: 'fr',
  ui: { language: 'Langue', contents: 'Table des matières', backToContents: 'Retour à la table des matières' },
  eyebrow: 'Juridique',
  title: 'Conditions d’utilisation',
  titleAccent: 'et de réservation',
  intro: 'Les conditions qui s’appliquent lorsque vous utilisez notre site Web, réservez un séjour directement auprès d’AirStay Properties ou réservez l’une de nos résidences par l’intermédiaire d’une plateforme de réservation.',
  meta: ['Version 1.0', 'Dernière mise à jour : 18 novembre 2026', 'Entrée en vigueur des conditions de réservation : 20 novembre 2026'],
  languageNote: 'Le présent document est offert en français et en anglais. En cas de divergence, la version française prévaut.',

  summary: {
    title: 'En bref : réservations directes',
    items: [
      'Les prix comprennent tous les frais obligatoires, y compris le ménage. La TPS, la TVQ et, le cas échéant, la taxe sur l’hébergement sont ajoutées au moment du paiement.',
      'Nous vous transmettons par courriel une confirmation, accompagnée des présentes conditions, dans les 15 jours suivant la réservation.',
      'Le voyageur responsable doit avoir au moins 18 ans et remplir l’enregistrement en ligne avec une pièce d’identité avec photo délivrée par une autorité gouvernementale et une vérification d’identité. Les instructions d’accès ne sont transmises qu’après la vérification.',
      'Une préautorisation (500 $ CA, ou jusqu’à 1 000 $ CA pour nos plus grandes résidences) peut être effectuée jusqu’à 3 jours avant l’arrivée et est libérée au plus tard 7 jours après le départ en l’absence de réclamation. Le montant est indiqué avant le paiement.',
      'Arrivée à partir de 16 h, départ au plus tard à 11 h. Heures de tranquillité de 22 h à 7 h.',
      'Aucune fête ni aucun événement. Interdiction de fumer et de vapoter dans le logement, sur les balcons et terrasses et dans l’immeuble, y compris les aires communes. Aucun animal sans autorisation écrite avant l’arrivée.',
      'Nous ne facturons que les coûts réels documentés des dommages, des pertes ou du nettoyage excessif, après vous avoir transmis une description accompagnée de photos ou de factures et vous avoir donné l’occasion de répondre.',
      'Les réservations effectuées par l’intermédiaire d’une plateforme sont régies par les conditions de cette plateforme et les règles de la maison de l’annonce (article 4).',
    ],
    note: 'Ce résumé est fourni par commodité. Les conditions complètes ci-dessous s’appliquent.',
  },

  sections: [
    {
      id: 'about',
      title: 'À propos de nous et portée des présentes conditions',
      blocks: [
        'AirStay Properties Inc. (« AirStay », « nous », « notre » ou « nos ») est une société constituée en vertu des lois de la Colombie-Britannique. Nous exerçons nos activités à Montréal (Québec), où nous gérons des résidences locatives de courte et de longue durée pour le compte de leurs propriétaires (les « propriétaires ») et offrons des services de gestion immobilière et d’immeubles, d’entretien ménager, d’aménagement paysager et d’entretien des terrains, ainsi que d’entretien et de réparation. Nous étendons nos activités à Vancouver (Colombie-Britannique).',
        {
          rows: [
            ['Dénomination', 'AirStay Properties Inc.'],
            ['Siège social', '610, rue Granville, bureau 1915, Vancouver (Colombie-Britannique) V6C 3T3'],
            ['Numéro d’entreprise du Québec (NEQ)', 'Immatriculation en cours'],
            ['Numéros d’enregistrement CITQ', '295420 (2055, rue Bishop), 304411 (386, rue Le Moyne), 312667 (380, rue Le Moyne), 316300 (155, rue Saint-Paul Est)'],
          ],
        },
        'Nos résidences de courte durée sont offertes dans des établissements d’hébergement touristique enregistrés auprès de la Corporation de l’industrie touristique du Québec (CITQ). Le numéro d’enregistrement de chaque établissement figure dans son annonce.',
        'Les présentes conditions d’utilisation et de réservation (les « conditions ») s’appliquent :',
        {
          list: [
            'à votre utilisation du site airstayproperties.com (le « site Web »);',
            'aux réservations effectuées directement auprès de nous, notamment au moyen de notre site de réservation book.airstayproperties.com (le « site de réservation »), ainsi qu’à toute réservation payée directement à AirStay (article 3);',
            'aux réservations de nos résidences effectuées par l’intermédiaire de plateformes de réservation tierces, dans la mesure prévue à l’article 4;',
            'aux demandes relatives à la location de longue durée, aux services aux propriétaires et aux carrières (articles 5 à 7).',
          ],
        },
        '**En bref :** si vous réservez sur notre site Web ou notre site de réservation, ou si vous payez directement AirStay, les présentes conditions et le contrat d’hébergement transmis avec votre réservation s’appliquent. Les réservations Airbnb sont régies par les conditions d’Airbnb et les règles de la maison de l’annonce.',
        'En utilisant le site Web ou en effectuant une réservation directe, vous acceptez les présentes conditions. Si vous ne les acceptez pas, veuillez ne pas utiliser le site Web ni effectuer de réservation. La façon dont nous traitons les renseignements personnels est expliquée dans notre [Politique de confidentialité](/privacy?lang=fr).',
      ],
    },

    {
      id: 'website',
      title: 'Utilisation de notre site Web',
      blocks: [
        { h: 'Utilisation acceptable', id: 'acceptable-use' },
        'Vous pouvez utiliser le site Web uniquement à des fins légitimes et conformément aux présentes conditions. Vous vous engagez à ne pas :',
        {
          list: [
            'fournir des renseignements faux ou trompeurs, vous faire passer pour une autre personne ou soumettre une demande ou une réservation au nom d’une personne sans son autorisation;',
            'nuire à la sécurité ou au fonctionnement du site Web, tenter d’y accéder sans autorisation ou y introduire des virus ou tout autre code malveillant;',
            'utiliser des robots, des outils de moissonnage ou d’autres moyens automatisés pour copier, recueillir ou surveiller son contenu, ni reproduire nos annonces, photos ou descriptions pour annoncer une propriété ailleurs;',
            'utiliser le site Web pour envoyer des messages non sollicités ou à des fins frauduleuses.',
          ],
        },
        { h: 'Exactitude de l’information', id: 'accuracy' },
        'Nous veillons à décrire nos résidences et nos services avec exactitude. Les photos et les descriptions sont représentatives : le mobilier, les finis, l’aménagement, la vue et les commodités peuvent varier d’une résidence à l’autre d’un même type et évoluer avec le temps. La disponibilité, les prix et les conditions de réservation sont confirmés sur le site de réservation au moment de la réservation et dans votre confirmation de réservation. Le contenu du site Web constitue de l’information générale et non une offre de location.',
        { h: 'Disponibilité du site Web', id: 'availability' },
        'Nous pouvons modifier, suspendre ou cesser d’offrir toute partie du site Web en tout temps. Nous faisons de notre mieux pour qu’il soit accessible et exact, mais nous ne garantissons pas qu’il sera exempt d’interruptions ou d’erreurs.',
        { h: 'Âge', id: 'age' },
        'Vous devez avoir au moins 18 ans pour effectuer une réservation ou conclure une entente avec nous.',
      ],
    },

    {
      id: 'direct-bookings',
      title: 'Réservations directes',
      blocks: [
        'Le présent article s’applique aux réservations effectuées directement auprès d’AirStay, au moyen du site de réservation ou confirmées par écrit par notre équipe (les « réservations directes »), qui sont confirmées à compter du 20 novembre 2026.',

        { h: 'Documents applicables à votre réservation', id: 'booking-documents' },
        'Chaque réservation directe est assujettie aux présentes conditions ainsi qu’au contrat d’hébergement et aux règles de la maison transmis avec votre confirmation de réservation, de même qu’à la politique d’annulation affichée au moment de la réservation. En cas d’incompatibilité entre le contrat d’hébergement et les présentes conditions, la disposition la plus favorable au voyageur s’applique.',
        'Le contrat d’hébergement, version 2.3 (la version française prévaut), de chaque établissement :',
        {
          list: [
            '[Contrat d’hébergement, version 2.3 : 155, rue Saint-Paul Est · CITQ 316300 (PDF)](/legal/AirStay-Contrat-v2.3-155-Saint-Paul-CITQ-316300.pdf)',
            '[Contrat d’hébergement, version 2.3 : 380, rue Le Moyne · CITQ 312667 (PDF)](/legal/AirStay-Contrat-v2.3-380-Le-Moyne-CITQ-312667.pdf)',
            '[Contrat d’hébergement, version 2.3 : 386, rue Le Moyne · CITQ 304411 (PDF)](/legal/AirStay-Contrat-v2.3-386-Le-Moyne-CITQ-304411.pdf)',
            '[Contrat d’hébergement, version 2.3 : 2055, rue Bishop · CITQ 295420 (PDF)](/legal/AirStay-Contrat-v2.3-Bishop-2055-CITQ-295420.pdf)',
          ],
        },
        'Votre réservation constitue un contrat d’hébergement touristique de courte durée dans un établissement enregistré auprès de la CITQ. Il ne s’agit pas d’un bail de logement au sens de l’article 1892 du Code civil du Québec, et aucune relation de locateur à locataire n’est créée.',

        { h: 'Prix et confirmation', id: 'price-confirmation' },
        'Les prix affichés comprennent tous les frais obligatoires, y compris le ménage. La TPS, la TVQ et, le cas échéant, la taxe sur l’hébergement sont ajoutées au moment du paiement, et le total est indiqué avant que vous confirmiez la réservation. Les montants sont en dollars canadiens, sauf indication contraire.',
        'Une demande de réservation, une demande d’information, une soumission ou un blocage de dates ne constitue pas une réservation confirmée. Votre réservation est confirmée une fois le paiement reçu ou autorisé selon ce qui est indiqué au moment du paiement et, s’il s’agit d’une demande de réservation, une fois que nous l’avons acceptée. Nous vous transmettrons par courriel une confirmation, accompagnée des présentes conditions, dans les 15 jours suivant la réservation.',
        'Nous pouvons refuser une demande de réservation pour un motif légitime, par exemple si le paiement échoue, si les renseignements fournis sont incomplets ou incohérents, si nous soupçonnons une fraude ou si la réservation présente un risque pour la propriété, l’immeuble ou les autres résidents. Nous ne refusons jamais une réservation pour un motif de discrimination interdit par la Charte des droits et libertés de la personne du Québec.',

        { h: 'Paiement et authentification', id: 'payment' },
        'Le paiement est exigible selon ce qui est indiqué au moment de la réservation. Les paiements sont traités par notre fournisseur tiers de services de paiement, et nous ne conservons pas les numéros complets des cartes de paiement. Les débits figurent sur votre relevé de carte sous la mention **AirStay (Rentals by Shervin)**.',
        'Pour vous protéger contre la fraude, l’émetteur de votre carte peut vous demander d’authentifier un paiement ou l’enregistrement de votre carte (par exemple, au moyen d’un code à usage unique ou de votre application bancaire). Si l’authentification n’est pas effectuée, le paiement peut être refusé et la réservation ne sera pas confirmée.',

        { h: 'Voyageur responsable et vérification d’identité', id: 'verification' },
        'Le voyageur qui effectue la réservation (le « voyageur responsable ») doit avoir au moins 18 ans et séjourner dans la propriété. Le voyageur responsable est tenu :',
        {
          list: [
            'de veiller à ce que chaque voyageur respecte les présentes conditions, le contrat d’hébergement et les règles de la maison;',
            'de remplir notre formulaire d’enregistrement en ligne avant l’arrivée, notamment en fournissant une pièce d’identité avec photo délivrée par une autorité gouvernementale et en se soumettant à une vérification d’identité effectuée par l’intermédiaire de notre fournisseur de services de paiement (le lien est transmis avec votre confirmation de réservation);',
            'de s’assurer que le nom figurant sur la réservation correspond à celui de la pièce d’identité fournie et à celui du titulaire de la carte de paiement;',
            'de nous signaler sans délai tout dommage ou problème.',
          ],
        },
        'Lorsque la vérification d’identité fait appel à la comparaison faciale (égoportrait), nous vous demandons votre consentement exprès, et vous pouvez plutôt choisir une vérification manuelle de votre identité par notre équipe. Les renseignements de vérification ne servent qu’à vérifier votre identité, à prévenir la fraude et à répondre aux contestations, rétrofacturations et réclamations, comme l’explique notre [Politique de confidentialité](/privacy?lang=fr).',
        'Pour la sécurité de nos voyageurs et de nos immeubles, les instructions d’accès ne sont transmises qu’une fois la vérification terminée. Si la vérification n’est pas effectuée au moins **24 heures avant l’arrivée** malgré nos rappels, nous pouvons annuler la réservation; tout remboursement est déterminé selon la politique d’annulation applicable au moment de la réservation.',

        { h: 'Préautorisation de garantie', id: 'security-hold' },
        'Nous pouvons effectuer une préautorisation (blocage temporaire de fonds) sur la carte du voyageur responsable pour les réservations directes et, comme le prévoit l’article 4, pour certaines réservations effectuées par l’intermédiaire de plateformes dont AirStay traite le paiement. Son montant est indiqué dans l’annonce et dans votre confirmation de réservation avant le paiement : **500 $ CA** pour les unités standard et jusqu’à **1 000 $ CA** pour les lofts de quatre chambres, les unités du dernier étage du 155, rue Saint-Paul et le penthouse du 380, rue Le Moyne.',
        'La préautorisation peut être effectuée jusqu’à **3 jours avant l’arrivée**. Comme une préautorisation expire après quelques jours selon les règles des réseaux de cartes, nous pouvons la renouveler pendant le séjour; votre autorisation de paiement demeure valide même si la préautorisation a expiré. Elle est libérée au plus tard **7 jours après le départ**, sauf si nous vous avons transmis un avis de réclamation (voir l’article 3.9). Le délai avant que les fonds libérés redeviennent disponibles dépend de l’émetteur de votre carte.',
        'Une préautorisation n’est pas un débit. Elle ne constitue ni une pénalité ni une limite à votre responsabilité à l’égard des coûts documentés.',

        { h: 'Arrivée, départ et départs tardifs', id: 'check-in-out' },
        'L’arrivée se fait à partir de **16 h** le jour de l’arrivée, et le départ au plus tard à **11 h** le jour du départ, sauf entente contraire écrite. Une arrivée hâtive ou un départ tardif peuvent être possibles sur demande, mais ne sont jamais garantis à l’avance.',
        'Le fait de demeurer dans la propriété après l’heure de départ sans notre consentement peut entraîner l’obligation de quitter les lieux, et les coûts documentés qui en découlent peuvent être facturés conformément à l’article 3.9.',

        { h: 'Occupation et usage permis', id: 'occupancy' },
        'La propriété ne peut être utilisée qu’à des fins d’hébergement personnel. Seuls les voyageurs inscrits à la réservation peuvent y séjourner, et leur nombre ne peut excéder la capacité d’accueil indiquée dans l’annonce. L’ajout d’un voyageur nécessite notre approbation avant l’arrivée et peut entraîner des frais supplémentaires, qui vous seront indiqués avant que vous les acceptiez.',
        'Vous ne pouvez pas sous-louer, céder ou transférer votre réservation, ni permettre à une personne autre que les voyageurs inscrits à la réservation d’utiliser la propriété, sans notre consentement écrit.',

        { h: 'Règles de la maison et activités interdites', id: 'house-rules' },
        'Sont interdits :',
        {
          list: [
            'les fêtes, les événements et les rassemblements, ainsi que tout usage commercial (y compris la photographie ou le tournage commercial) sans notre autorisation écrite préalable;',
            'le fait de fumer ou de vapoter toute substance, y compris le cannabis, dans le logement, sur les balcons et terrasses et dans l’immeuble, y compris les aires communes. À l’extérieur, veuillez vous éloigner des portes, fenêtres et prises d’air de l’immeuble;',
            'les animaux, sauf autorisation écrite avant l’arrivée. Les animaux d’assistance accompagnant une personne handicapée ne sont pas des animaux de compagnie; veuillez nous en informer avant l’arrivée;',
            'le bruit pendant les heures de tranquillité, de **22 h à 7 h**, et toute infraction aux règlements de l’immeuble;',
            'le dépassement du nombre de voyageurs inscrits à la réservation;',
            'toute activité illégale, dangereuse ou présentant un risque, notamment le fait de désactiver ou d’altérer un détecteur de fumée, une serrure ou un équipement de l’immeuble.',
          ],
        },
        'D’autres règles de la maison peuvent être transmises avec votre confirmation de réservation ou figurer dans l’annonce; elles font partie de votre réservation.',
        'Un manquement grave ou répété à ces règles par vous ou vos voyageurs peut entraîner la fin du séjour. Tout remboursement sera déterminé conformément à la politique d’annulation et à la loi applicable, et les coûts documentés pourront être facturés comme il est prévu ci-dessous.',

        { h: 'Dommages et coûts documentés', id: 'charges' },
        'Vous êtes responsable des dommages, des pertes, du nettoyage excessif ou des infractions aux règles occasionnés pendant votre séjour par vous, vos voyageurs ou toute personne à qui vous donnez accès à la propriété, au-delà de l’usure normale, y compris toute amende imposée par la Ville de Montréal ou par un syndicat de copropriété en raison d’une conduite pendant votre séjour.',
        'Vous autorisez AirStay et son fournisseur de services de paiement à débiter la carte fournie du montant de la réservation et des taxes et, le cas échéant, des coûts réels documentés décrits ci-dessus. Nous ne débitons ces coûts qu’après vous avoir transmis une description des dommages, photos ou factures à l’appui, et vous avoir donné l’occasion de répondre. Cette autorisation vise également les coûts documentés relatifs à votre séjour constatés après le départ.',
        '**Processus de réclamation.** Si nous entendons facturer des coûts documentés, nous vous transmettons un avis de réclamation dans les **14 jours suivant le départ**, accompagné d’une description et de photos ou de factures à l’appui. Vous disposez ensuite de **7 jours** pour y répondre. À l’expiration de ce délai, et après avoir tenu compte de votre réponse, nous pouvons débiter le montant documenté de la carte au dossier. Tout montant perçu en trop vous est remboursé. Vous pouvez contester une réclamation devant la Division des petites créances de la Cour du Québec.',

        { h: 'Serrures intelligentes et caméras de sécurité', id: 'locks-cameras' },
        'Nos résidences sont munies de serrures intelligentes qui utilisent un code unique pour chaque voyageur. La serrure enregistre la date et l’heure de chaque entrée. Certains immeubles sont munis de caméras de sécurité dans certaines aires communes, comme les corridors et les entrées. Il n’y a jamais de caméra à l’intérieur des logements. Ces enregistrements servent à la sécurité, aux enquêtes sur les incidents, au règlement des différends et aux réclamations, comme le décrit notre [Politique de confidentialité](/privacy?lang=fr).',

        { h: 'État de la propriété et départ', id: 'condition' },
        'Nous vous remettons la propriété propre et en bon état à l’arrivée. Veuillez la laisser dans le même état, compte tenu de l’usure normale, et nous informer promptement de tout problème.',
        'Avant de partir, veuillez :',
        {
          list: [
            'déposer la vaisselle utilisée dans l’évier;',
            'regrouper les serviettes utilisées dans la salle de bain;',
            'jeter les ordures dans les poubelles intérieures;',
            'éteindre les lumières et la climatisation;',
            'verrouiller la porte et répondre « CHECKED OUT » à notre message.',
          ],
        },

        { h: 'Accès à la propriété', id: 'entry' },
        'AirStay ou le propriétaire peuvent entrer dans la propriété à des heures raisonnables, après vous en avoir avisé, pour l’entretien, des réparations ou une inspection. En cas d’urgence, comme un incendie, un dégât d’eau ou un danger imminent, nous pouvons entrer sans préavis.',

        { h: 'Annulations, modifications, départs anticipés et non-présentations', id: 'cancellation' },
        // PENDING SHERVIN APPROVAL: direct-booking cancellation policy (contract v2.2, §7.1.1). Confirm before go-live.
        'Pour les réservations directes : annulation sans frais dans les 48 heures suivant la réservation si l’arrivée est dans 30 jours ou plus; dates régulières : 100 % remboursé à 30 jours ou plus, 50 % de 14 à 29 jours, aucun remboursement à moins de 14 jours; dates d’événements et de pointe (indiquées à la réservation) : 100 % remboursé à 60 jours ou plus, aucun remboursement ensuite; tarif non remboursable optionnel (rabais de 10 %); un changement de dates gratuit à 30 jours ou plus, moyennant la différence de prix. Si nous relouons des nuits annulées ou non utilisées, nous vous remboursons le montant perçu pour ces nuits, jusqu’à concurrence de ce que vous avez payé. Les remboursements sont faits sans retenue de frais de traitement. Pour Vrbo, Expedia et les autres canaux, la politique du canal s’applique.',
        'Tout remboursement est effectué au moyen du mode de paiement initial. Le détail de la politique figure à l’article 7 du contrat d’hébergement.',
        'Aucun remboursement n’est accordé en cas de non-présentation, et les nuits non utilisées ne sont pas remboursées si vous quittez avant la fin de votre séjour, sauf dans la mesure prévue par la politique d’annulation ou exigée par la loi.',
        'Toute modification des dates, de la résidence ou du nombre de voyageurs est sujette à disponibilité et à notre confirmation écrite, et peut modifier le prix.',
        'Nous vous recommandons de souscrire une assurance voyage.',
        'Si nous annulons votre réservation pour un motif autre qu’un manquement aux présentes conditions ou au contrat d’hébergement, nous vous rembourserons les sommes payées pour les nuits annulées ou, si vous le préférez, nous vous proposerons une résidence comparable, si une telle résidence est disponible.',

        { h: 'Force majeure', id: 'force-majeure' },
        'Ni vous ni nous ne sommes responsables d’un défaut d’exécution causé par une force majeure, comme un incendie, une inondation, une panne prolongée des services publics, une urgence touchant l’immeuble, une ordonnance des autorités publiques, une grève ou une épidémie. Si un tel événement nous empêche de fournir la propriété, nous vous proposerons une solution de rechange comparable, si elle est disponible, ou nous vous rembourserons les sommes payées pour les nuits que nous ne pouvons fournir. Veuillez nous signaler immédiatement toute interruption afin que nous puissions y remédier.',

        { h: 'Effets personnels, stationnement et commodités', id: 'belongings' },
        'Sous réserve des règles du Code civil du Québec sur la responsabilité des hôteliers (art. 2298 et suiv.) et sauf faute de notre part, AirStay n’est pas responsable de la perte, du vol ou de l’endommagement des effets personnels des voyageurs, ni des véhicules et du stationnement, que les voyageurs organisent à leurs propres risques. Le stationnement n’est pas inclus, sauf mention contraire dans l’annonce. Les suggestions de stationnement que nous pouvons fournir concernent des exploitants tiers, qui fixent eux-mêmes leurs tarifs, leurs heures et leurs conditions.',
        'Les commodités communes de l’immeuble, lorsqu’elles sont offertes, sont assujetties aux règles et aux heures d’ouverture de l’immeuble et peuvent être temporairement indisponibles.',

        { h: 'Documents et signatures électroniques', id: 'electronic' },
        'Vous acceptez que les présentes conditions, le contrat d’hébergement et votre réservation puissent être acceptés, signés, communiqués et conservés sur support électronique. Votre acceptation électronique, par exemple en cochant une case, en cliquant pour confirmer ou en signant dans le formulaire d’enregistrement en ligne, a le même effet qu’une signature manuscrite, conformément à la Loi concernant le cadre juridique des technologies de l’information. Nos documents électroniques relatifs à votre réservation, à votre acceptation, aux résultats de la vérification et à nos communications peuvent servir de preuve. Lorsque vous acceptez les présentes conditions et le contrat d’hébergement, nous consignons la date et l’heure de votre acceptation, l’adresse IP utilisée et la version des documents acceptés.',

        { h: 'Questions de facturation et contestations de débit', id: 'billing-disputes' },
        'Si vous avez une question ou une préoccupation au sujet d’un débit, veuillez d’abord communiquer avec nous à [info@airstayproperties.com](mailto:info@airstayproperties.com). Dans la mesure permise par la loi, vous acceptez de nous donner une occasion raisonnable de régler la situation avant de contester le débit auprès de l’émetteur de votre carte. Cela ne limite aucun droit que vous confèrent la Loi sur la protection du consommateur ou votre contrat de carte.',
        'Si un débit est contesté, nous pouvons fournir à notre fournisseur de services de paiement et à l’émetteur de la carte les renseignements raisonnablement nécessaires pour y répondre, notamment : votre acceptation des présentes conditions; les résultats de la vérification d’identité; les messages échangés avec vous; les renseignements relatifs à l’arrivée et au départ, y compris les registres d’accès de la serrure; et les photos, factures ou autres documents justifiant le débit. Nous conservons les dossiers de réservation, les preuves d’acceptation, les messages et les résultats de la vérification pendant au moins 180 jours après le départ, ou plus longtemps tant qu’une contestation, une rétrofacturation ou une réclamation est en cours. Les registres d’accès de la serrure liés à une contestation ou à une réclamation sont conservés aussi longtemps que nécessaire.',
      ],
    },

    {
      id: 'platform-bookings',
      title: 'Réservations effectuées par l’intermédiaire de plateformes tierces',
      blocks: [
        'Lorsque vous réservez l’une de nos résidences par l’intermédiaire d’une plateforme tierce, comme Airbnb, Vrbo, Booking.com, Expedia, Hotels.com ou Hopper, votre réservation est effectuée par l’intermédiaire de cette plateforme. Les conditions de la plateforme et les règles de la maison de l’annonce s’appliquent et, sauf si AirStay traite votre paiement, les paiements, remboursements et annulations sont traités par la plateforme. En cas de divergence entre les présentes conditions et celles de la plateforme pour une réservation effectuée par son intermédiaire, les conditions de la plateforme prévalent.',
        'Nous respectons les politiques de chaque plateforme. Lorsqu’une plateforme ne permet pas les contrats de location distincts, la collecte de pièces d’identité ou les amendes imposées par l’hôte, nous ne les imposons pas.',
        'Pour les réservations Vrbo, Expedia ou Hotels.com dont AirStay traite le paiement, les présentes conditions et le contrat d’hébergement s’appliquent en plus des conditions de la plateforme, lorsque le contrat est joint à l’annonce ou que vous l’acceptez, notamment dans notre enregistrement en ligne. La préautorisation de garantie décrite à l’article 3 s’applique à ces réservations lorsqu’elle est indiquée dans l’annonce avant la réservation; le dépôt de garantie remboursable de Vrbo n’est pas utilisé. La politique d’annulation de la plateforme s’applique.',
        'Les réservations Airbnb sont régies uniquement par les conditions d’Airbnb et les règles de la maison de l’annonce.',
      ],
    },

    {
      id: 'long-term',
      title: 'Location résidentielle de longue durée',
      blocks: [
        'La location de longue durée d’un logement meublé ou non meublé constitue un bail de logement régi par le Code civil du Québec. Elle n’est conclue qu’au moyen du formulaire de bail obligatoire du Tribunal administratif du logement, accompagné des annexes exigées par la loi, et vos droits et obligations sont ceux prévus par ce bail et par la loi.',
        'Les annonces, les prix, la disponibilité et les descriptions figurant sur le site Web, ainsi que toute demande ou visite, ne constituent pas une offre de location et ne réservent aucun logement. Un logement n’est réservé qu’à la signature d’un bail par les deux parties.',
        'Les renseignements personnels demandés pour évaluer une demande de location se limitent à ce que permet la loi, comme le décrit notre [Politique de confidentialité](/privacy?lang=fr).',
      ],
    },

    {
      id: 'owners',
      title: 'Propriétaires et clients de services',
      blocks: [
        'Les demandes, les évaluations de revenus locatifs et les propositions sont gratuites et sans engagement, pour vous comme pour nous.',
        'Les projections de revenus, les taux d’occupation, les prix et les autres estimations reposent sur des hypothèses et sur l’information de marché disponible au moment où ils sont établis. Il s’agit uniquement d’estimations, et non de garanties de revenus, d’occupation ou de résultats futurs.',
        'Une évaluation ne constitue pas un avis juridique, fiscal ou financier. À Montréal, la location de courte durée est notamment assujettie aux règlements de zonage, à l’enregistrement auprès de la CITQ et aux règles de toute déclaration de copropriété. Une évaluation ne confirme pas qu’une propriété peut légalement être louée à court terme.',
        'Nos services de gestion, d’entretien ménager, d’entretien des terrains et d’entretien et de réparation ne sont fournis qu’en vertu d’une entente écrite ou d’une soumission acceptée, signée ou approuvée par les deux parties, laquelle régit alors notre relation au lieu des présentes conditions.',
        'Lorsque vous nous transmettez des renseignements sur une propriété, vous confirmez en être propriétaire ou être autorisé à les communiquer.',
      ],
    },

    {
      id: 'careers',
      title: 'Carrières',
      blocks: [
        'Les offres d’emploi publiées sur le site Web sont fournies à titre informatif et peuvent être modifiées ou retirées en tout temps. Le dépôt d’une candidature ne crée aucune relation d’emploi ni aucune obligation d’embauche. Veuillez vous assurer que les renseignements fournis sont exacts et complets. Nous ne communiquons avec vos références qu’avec votre permission. Nous traitons les renseignements des candidats conformément à notre [Politique de confidentialité](/privacy?lang=fr).',
      ],
    },

    {
      id: 'submissions',
      title: 'Vos envois et fichiers téléversés',
      blocks: [
        'Lorsque vous nous transmettez des renseignements ou des fichiers au moyen du site Web, comme des photos, des documents, un curriculum vitæ ou un portfolio, vous confirmez que :',
        {
          list: [
            'les renseignements sont exacts et vous avez le droit de les communiquer;',
            's’ils contiennent des renseignements personnels sur d’autres personnes (par exemple des copropriétaires, des locataires ou des voyageurs), vous êtes autorisé à nous les communiquer aux fins de votre demande;',
            'les fichiers sont exempts de virus ou de tout autre code malveillant et ne contiennent rien d’illégal, de diffamatoire ou de contrefaisant.',
          ],
        },
        'Vous demeurez propriétaire de vos fichiers. Vous nous permettez de les utiliser, de les copier et de les conserver uniquement dans la mesure nécessaire pour répondre à votre demande et fournir les services connexes. Nous pouvons refuser ou supprimer tout envoi non conforme aux présentes conditions, ou ne pas y donner suite.',
        'Ne téléversez aucune pièce d’identité ni aucun renseignement de paiement au moyen des formulaires du site Web, et ne nous les transmettez pas par courriel. Lorsque nous en avons besoin, nous vous les demandons par un moyen sécurisé.',
      ],
    },

    {
      id: 'intellectual-property',
      title: 'Propriété intellectuelle',
      blocks: [
        'Le site Web et son contenu, notamment les textes, photographies, vidéos, logos, noms commerciaux, éléments graphiques et logiciels, appartiennent à AirStay ou à ses concédants de licence et sont protégés par les lois sur le droit d’auteur et sur les marques de commerce. Vous pouvez consulter et imprimer des pages pour votre usage personnel et non commercial. Toute autre utilisation, notamment la copie, la reproduction, la distribution, l’encadrement ou la modification du contenu, nécessite notre autorisation écrite préalable. Nos photos et descriptions d’annonces ne peuvent servir à annoncer une propriété ailleurs.',
      ],
    },

    {
      id: 'third-party',
      title: 'Sites et services de tiers',
      blocks: [
        'Notre site de réservation est exploité sur une plateforme de réservation tierce, et les paiements sont traités par un fournisseur tiers de services de paiement. Le site Web contient également des liens vers des plateformes de réservation, des cartes, des réseaux sociaux et d’autres sites de tiers. Ces services sont régis par leurs propres conditions et politiques de confidentialité, et nous ne sommes pas responsables de leur contenu, de leur disponibilité ni de leurs pratiques.',
        'Si vous recevez une offre de réservation pour l’une de nos résidences provenant d’un site Web ou d’une personne que vous ne reconnaissez pas, veuillez communiquer avec nous à [info@airstayproperties.com](mailto:info@airstayproperties.com) avant d’effectuer un paiement.',
      ],
    },

    {
      id: 'liability',
      title: 'Exonérations et limitation de responsabilité',
      blocks: [
        'Le site Web et son contenu sont fournis à titre d’information générale. Nous ne garantissons pas que le site Web sera accessible en tout temps ni qu’il sera exempt d’erreurs.',
        {
          note: '**Avis aux consommateurs du Québec :** en vertu de la Loi sur la protection du consommateur, un commerçant ne peut se dégager des conséquences de son fait personnel ou de celui de son représentant. Les limitations prévues au paragraphe suivant ne s’appliquent donc pas aux consommateurs du Québec dans la mesure où cette loi les interdit.',
        },
        'Sous réserve de l’avis ci-dessus et dans la mesure permise par la loi, la responsabilité totale d’AirStay à l’égard de toute réclamation relative à un séjour est limitée au montant payé pour la réservation, et AirStay n’est pas responsable des dommages indirects.',
        'Pour les voyageurs qui réservent à des fins professionnelles et qui ne sont pas des consommateurs au sens de la Loi sur la protection du consommateur, la responsabilité d’AirStay est limitée au prix du séjour et exclut les dommages indirects, sauf en cas de préjudice corporel ou moral et de préjudice causé par une faute intentionnelle ou une faute lourde.',
        'Aucune disposition des présentes conditions n’exclut ni ne limite la responsabilité pour le préjudice corporel ou moral, ou pour le préjudice matériel causé par une faute intentionnelle ou une faute lourde (Code civil du Québec, art. 1474), ni aucun droit ou recours que vous confère une loi d’ordre public, notamment la Loi sur la protection du consommateur.',
      ],
    },

    {
      id: 'governing-law',
      title: 'Droit applicable et règlement des différends',
      blocks: [
        'Les présentes conditions et toute réservation directe sont régies par les lois de la province de Québec et par les lois fédérales du Canada qui s’y appliquent. Tout différend sera soumis aux tribunaux compétents du district judiciaire de Montréal, sous réserve des droits d’ordre public des consommateurs.',
        'Si vous êtes un consommateur, le présent article ne vous prive d’aucun droit que vous confère une loi d’ordre public, notamment le droit d’intenter une action devant le tribunal de votre domicile lorsque la loi le permet et la protection que vous assurent les règles impératives de la loi de votre lieu de résidence lorsqu’elles s’appliquent.',
        'Nous vous invitons à communiquer d’abord avec nous afin que nous puissions tenter de régler rapidement toute préoccupation. Cela ne limite pas votre droit de vous adresser aux tribunaux.',
      ],
    },

    {
      id: 'changes',
      title: 'Modification des présentes conditions',
      blocks: [
        'Nous pouvons mettre à jour les présentes conditions pour tenir compte de l’évolution de nos services, de la loi ou des exigences des plateformes de réservation. La version à jour est publiée sur cette page avec une nouvelle date de dernière mise à jour. Les modifications s’appliquent uniquement aux réservations confirmées après leur entrée en vigueur et à votre utilisation du site Web après leur publication. Une réservation est régie par la version en vigueur au moment de sa confirmation. Les versions antérieures sont disponibles sur demande.',
        'Les conditions de réservation prévues aux articles 3 et 4 entrent en vigueur le 20 novembre 2026 et s’appliquent aux réservations confirmées à compter de cette date. Les réservations confirmées avant cette date demeurent régies par les conditions acceptées au moment de la réservation.',
      ],
    },

    {
      id: 'language',
      title: 'Langue',
      blocks: [
        'Les présentes conditions sont offertes en français et en anglais. La version française est présentée en premier; utilisez le sélecteur de langue en haut de cette page pour changer de version. En cas de divergence, la version française prévaut.',
      ],
    },

    {
      id: 'general',
      title: 'Dispositions générales et coordonnées',
      blocks: [
        {
          list: [
            '**Intégralité de l’entente.** Pour une réservation directe, les présentes conditions, le contrat d’hébergement et les règles de la maison transmis avec votre confirmation de réservation, ainsi que la politique d’annulation affichée au moment de la réservation, constituent l’entente intégrale entre vous et nous concernant votre séjour.',
            '**Divisibilité.** Si une disposition est jugée invalide ou inapplicable, les autres dispositions demeurent en vigueur.',
            '**Absence de renonciation.** Le fait que nous n’exercions pas un droit prévu aux présentes conditions ne constitue pas une renonciation à ce droit.',
            '**Cession.** Vous ne pouvez céder votre réservation ni vos droits en vertu des présentes conditions sans notre consentement écrit. Nous pouvons céder nos droits à une société liée ou à un successeur, pourvu que vos droits ne soient pas réduits.',
            '**Avis.** Nous pouvons vous transmettre des avis à l’adresse courriel ou au numéro de téléphone indiqués dans votre réservation. Vous pouvez nous transmettre vos avis à info@airstayproperties.com.',
          ],
        },
        'Pour nous joindre :',
        {
          rows: [
            ['Entreprise', 'AirStay Properties Inc.'],
            ['Siège social', '610, rue Granville, bureau 1915, Vancouver (Colombie-Britannique) V6C 3T3'],
            ['Numéro d’entreprise du Québec (NEQ)', 'Immatriculation en cours'],
            ['Courriel', '[info@airstayproperties.com](mailto:info@airstayproperties.com)'],
            ['Libellé sur les relevés de carte', 'AirStay (Rentals by Shervin)'],
          ],
        },
      ],
    },
  ],

  closing: 'AirStay Properties Inc. · Conditions d’utilisation et de réservation · Version du 18 novembre 2026; conditions de réservation en vigueur le 20 novembre 2026',
}

export default terms
