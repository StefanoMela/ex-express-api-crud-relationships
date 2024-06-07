# Express API CRUD relationships

Partendo dal DB precedente, aggiungeremo i seguenti modelli con le relative relazioni col modello Post:

- Category (one-to-many): Ogni Post deve avere una categoria associata, e una categoria può avere più Post associati.

- Tags (many-to-many): Ogni Post può avere uno o più tag associati, e ogni Tag può avere uno o più Post associati.

Successivamente, aggiungete la validazione dei dati utilizzando Express Validator alle rotte del vostro blog.

Infine, assicuratevi che le richieste di lettura GET restituiscano anche la categoria e i tags di ogni singolo Post.

Piccolo suggerimento: Se avete già popolato la tabella dei posts indicate il campo categoryId come nullable o un valore di default altrimenti avreste un errore in fase di migrazione.

## BONUS:

Implementare le operazioni di CRUD per il modello Category.

Implementare le operazioni di CRUD per il modello Tag.
