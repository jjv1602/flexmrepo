CREATE TABLE IF NOT EXISTS public.users
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    fname character varying COLLATE pg_catalog."default",
    lname character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    pwd character varying COLLATE pg_catalog."default",
    age integer,
    CONSTRAINT users_pkey PRIMARY KEY (id)
)
