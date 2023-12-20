
CREATE TABLE IF NOT EXISTS public.batches
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1000 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    max_seats integer,
    available_seats integer,
    trainer_id integer,
    batchname character varying COLLATE pg_catalog."default",
    helptitle character varying COLLATE pg_catalog."default",
    starttime character varying COLLATE pg_catalog."default",
    endtime character varying COLLATE pg_catalog."default",
    CONSTRAINT batches_pkey PRIMARY KEY (id),
    CONSTRAINT trainer_association FOREIGN KEY (trainer_id)
        REFERENCES public.trainers (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)



