CREATE UNIQUE INDEX "Location_ID_idx"
    ON public."Location" USING btree
    ("Location_ID" ASC NULLS LAST)
;