CREATE TABLE IF NOT EXISTS public.trainers
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 2000 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    name character varying COLLATE pg_catalog."default" NOT NULL,
    role character varying COLLATE pg_catalog."default" NOT NULL,
    img character varying(255) COLLATE pg_catalog."default" DEFAULT 'https://res.cloudinary.com/dxxu4powb/image/upload/v1678457241/trainer1_c7znsg.jpg'::character varying,
    CONSTRAINT trainers_pkey PRIMARY KEY (id)
)

