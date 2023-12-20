CREATE TABLE IF NOT EXISTS public.bookings
(
    id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 5000 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
    user_id integer NOT NULL,
    batch_id integer NOT NULL,
    created timestamp without time zone DEFAULT now(),
    payment_done boolean DEFAULT false,
    CONSTRAINT bookings_pkey PRIMARY KEY (id),
    CONSTRAINT batch_reference FOREIGN KEY (batch_id)
        REFERENCES public.batches (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION,
    CONSTRAINT user_reference FOREIGN KEY (user_id)
        REFERENCES public.users (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)


