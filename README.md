# demos1231

Dema Couders dla klientów. Statyczna strona bez builda, hostowana na Vercelu.

## Dema

- `/tlumaczenia` wycena tłumaczeń przysięgłych ze skanu. Odczyt tekstu (OCR) działa w przeglądarce, system liczy strony rozliczeniowe (1125 znaków), rozpoznaje język i rodzaj dokumentu, podaje cenę z terminem (z pominięciem weekendów i świąt), przyjmuje zamówienie, a w zakładce „Panel biura” pokazuje opłacone zlecenia i cennik do edycji.

## Wdrożenie

1. Na vercel.com: Add New, Project, Import Git Repository, wybierz `demos1231`.
2. Framework Preset: Other. Build Command i Output Directory zostaw puste.
3. Deploy. Każdy push na `main` wdraża się sam.

## Prywatność

Dokumenty nie opuszczają przeglądarki. Strona nie ładuje skryptów, fontów ani danych z zewnętrznych serwerów, wszystko jest w tym repo.

## Licencje

Zobacz `THIRD_PARTY_NOTICES.md`.
