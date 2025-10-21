<script setup lang="ts">
import type {
    DetalleFactura,
    FacturaResponse,
    FormaPago,
    Partida,
} from '~/types/facturas';

const { t } = useI18n({ useScope: 'local' });
const route = useRoute();
const router = useRouter();
const uiStore = useUiStore();
const clave = computed(() => route.query.clave);
const folio = computed(() => route.query.folio);
const pasu = ref(0);

const factura = ref<DetalleFactura | null>(null);
const partidas = ref<Partida[] | null>(null);
const formaPago = ref<FormaPago[] | null>(null);

const { execute } = useApiLazyFetch<FacturaResponse>(
    'api/empresas/1/clientes/facturas/detalle',
    {
        method: 'POST',
        body: {
            clave,
            folio,
            pasu,
        },
        server: false,
        watch: false,
        onRequest: () => {
            // uiStore.setLoading(true);
        },
        onResponse: async ({ response }) => {
            uiStore.setLoading(false);
            const _data = response._data as any;
            factura.value = response._data?.factura as DetalleFactura;
            formaPago.value = [...(response._data?.formaPago as FormaPago[])];
            partidas.value = response._data?.partidas as Partida[];
            router.replace({
                query: {
                    clave: factura.value.cve_factu.trim(),
                    folio: factura.value.no_fac.trim(),
                },
            });
        },
    },
);

function irPrimero() {
    pasu.value = 1;
    execute();
}
function irAnterior() {
    pasu.value = 2;
    execute();
}
function irSiguiente() {
    pasu.value = 3;
    execute();
}
function irUltimo() {
    pasu.value = 4;
    execute();
}
</script>

<template>
    <Transition name="fade">
        <div v-if="factura" class="font-TTCRegular 3xl:text-2xl">
            <div class="flex gap-[10px] mb-[20px] font-TTCDemibold">
                <Button
                    type="button"
                    :label="t('primero')"
                    icon="pi pi-angle-double-left"
                    @click="irPrimero" />
                <Button
                    type="button"
                    :label="t('anterior')"
                    icon="pi pi-angle-left"
                    @click="irAnterior" />
                <Button
                    type="button"
                    :label="t('siguiente')"
                    icon="pi pi-angle-right"
                    iconPos="right"
                    @click="irSiguiente" />
                <Button
                    type="button"
                    :label="t('ultimo')"
                    icon="pi pi-angle-double-right"
                    iconPos="right"
                    @click="irUltimo" />
            </div>
            <div class="flex justify-between font-TTCRegular">
                <div class="text-3xl font-TTCDemibold">
                    <span>{{ uiStore.nombreEmpresa }}</span>
                </div>
                <div>
                    <div class="font-TTCDemibold text-3xl">
                        <span>{{ t('factura') }}</span> <span>{{ factura?.no_fac }}</span>
                    </div>
                    <div>{{ t('contado') }}</div>
                    <div>02/09/2025</div>
                    <div><span>TC:</span> <span>$18.6440</span></div>
                    <div>
                        <span>{{ t('almacen') }}:</span> <span>MONTERREY</span>
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2 mb-4">
                <Accordion value="0">
                    <AccordionPanel value="0">
                        <AccordionHeader>{{ t('facturado') }}</AccordionHeader>
                        <AccordionContent>asdf</AccordionContent>
                    </AccordionPanel>
                </Accordion>
                <Accordion value="1">
                    <AccordionPanel value="0">
                        <AccordionHeader>{{ t('entregado') }}</AccordionHeader>
                        <AccordionContent>asdf</AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <!-- Otros Datos -->
            <div class="mb-4">
                <Accordion value="3">
                    <AccordionPanel value="0">
                        <AccordionHeader>{{ t('otros') }}</AccordionHeader>
                        <AccordionContent>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.des_etiq1.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.dato_1.trim()
                                    }}</label>
                                </div>
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.des_etiq2.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.dato_2.trim()
                                    }}</label>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.des_etiq3.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.dato_3.trim()
                                    }}</label>
                                </div>
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.des_etiq4.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.dato_4.trim()
                                    }}</label>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.des_etiq5.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.dato_5.trim()
                                    }}</label>
                                </div>
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.des_etiq6.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.dato_6.trim()
                                    }}</label>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBold col-span-3">{{
                                        factura?.des_etiq7.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.dato_7.trim()
                                    }}</label>
                                </div>
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBold col-span-3">{{
                                        factura?.des_etiq8.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.dato_8.trim()
                                    }}</label>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <!-- Datos Estadisticos -->
            <div class="mb-4">
                <Accordion value="4">
                    <AccordionPanel value="0">
                        <AccordionHeader>{{ t('estadisticos') }}</AccordionHeader>
                        <AccordionContent>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.titde1.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.nomde1.trim()
                                    }}</label>
                                </div>
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.titde2.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.nomde2.trim()
                                    }}</label>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.titde3.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.nomde3.trim()
                                    }}</label>
                                </div>
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.titde4.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.nomde4.trim()
                                    }}</label>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.titde5.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.nomde5.trim()
                                    }}</label>
                                </div>
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBolditalic col-span-3">{{
                                        factura?.titde6.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.nomde6.trim()
                                    }}</label>
                                </div>
                            </div>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBold col-span-3">{{
                                        factura?.titde7.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.nomde7.trim()
                                    }}</label>
                                </div>
                                <div class="grid grid-cols-12 gap-4 p-1">
                                    <label class="font-TTCBold col-span-3">{{
                                        factura?.titde8.trim()
                                    }}</label>
                                    <label class="col-span-9">{{
                                        factura?.nomde8.trim()
                                    }}</label>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <!-- Agentes -->
            <div class="mb-4">
                <Accordion value="5">
                    <AccordionPanel value="0">
                        <AccordionHeader>{{ t('agentes') }}</AccordionHeader>
                        <AccordionContent>
                            <div class="grid grid-cols-1 md:grid-cols-2">
                                <div class="grid grid-cols-12 gap-4 p-2">
                                    <label class="col-span-3 text-right font-TTCBold">Agente 1:</label>
                                    <label class="col-span-9">{{
                                        factura?.nom_age1
                                    }}</label>
                                </div>
                                <div class="grid grid-cols-12 gap-4 p-2">
                                    <label class="col-span-3 text-right font-TTCBold">Agente 2:</label>
                                    <label class="col-span-9">{{
                                        factura?.nom_age2
                                    }}</label>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <!-- Forma de pago -->
            <div class="mb-4">
                <Accordion value="6">
                    <AccordionPanel value="0">
                        <AccordionHeader>{{ t('forma') }}</AccordionHeader>
                        <AccordionContent>
                            <DataTable
                                showGridlines
                                :value="formaPago"
                                :totalRecords="Number(1)"
                                :rows="Number(1)">
                                <Column
                                    field="tipo"
                                    header="Tipo"
                                    bodyStyle="text-align: center"
                                    :pt="{
                                        columnHeaderContent: {
                                            class: 'justify-center                                            ',
                                        },
                                    }" />
                                <Column
                                    field="subtipo"
                                    header="Subtipo"
                                    bodyStyle="text-align: center"
                                    :pt="{
                                        columnHeaderContent: {
                                            class: 'justify-center                                            ',
                                        },
                                    }" />
                                <Column
                                    field="cantsub"
                                    header="Monto"
                                    bodyStyle="text-align: center"
                                    :pt="{
                                        columnHeaderContent: {
                                            class: 'justify-center                                            ',
                                        },
                                    }" />
                            </DataTable>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <!-- Descuentos -->
            <div class="mb-4">
                <Accordion value="5">
                    <AccordionPanel value="0">
                        <AccordionHeader>{{ t('descuentos') }}</AccordionHeader>
                        <AccordionContent>
                            <div
                                class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                                <div class="grid grid-cols-12 items-center">
                                    <label class="col-span-3">Descuento 1</label>
                                    <InputGroup class="col-span-9">
                                        <InputText
                                            class="text-right"
                                            disabled
                                            :value="factura?.descue" />
                                        <InputGroupAddon>
                                            <i class="pi pi-percentage"></i>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                                <div class="grid grid-cols-12 items-center">
                                    <label class="col-span-3">Descuento 2</label>
                                    <InputGroup class="col-span-9">
                                        <InputText
                                            class="text-right"
                                            disabled
                                            :value="factura?.descue2" />
                                        <InputGroupAddon>
                                            <i class="pi pi-percentage"></i>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                                <div class="grid grid-cols-12 items-center">
                                    <label class="col-span-3">Descuento 3</label>
                                    <InputGroup class="col-span-9">
                                        <InputText
                                            class="text-right"
                                            disabled
                                            :value="factura?.descue3" />
                                        <InputGroupAddon>
                                            <i class="pi pi-percentage"></i>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                                <div class="grid grid-cols-12 items-center">
                                    <label class="col-span-3">Descuento 4</label>
                                    <InputGroup class="col-span-9">
                                        <InputText
                                            class="text-right"
                                            disabled
                                            :value="factura?.descue4" />
                                        <InputGroupAddon>
                                            <i class="pi pi-percentage"></i>
                                        </InputGroupAddon>
                                    </InputGroup>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionPanel>
                </Accordion>
            </div>
            <div class="mb-4">
                <DataTable
                    showGridlines
                    :value="partidas"
                    :totalRecords="partidas?.length"
                    :rows="partidas?.length">
                    <Column
                        :header="t('cantidad')"
                        field="cant_prod"
                        bodyStyle="text-align: center"
                        :pt="{
                            columnHeaderContent: {
                                class: 'justify-center                                            ',
                            },
                        }" />
                    <Column
                        :header="t('unidad')"
                        field="unidad"
                        bodyStyle="text-align: center"
                        :pt="{
                            columnHeaderContent: {
                                class: 'justify-center                                            ',
                            },
                        }" />
                    <Column
                        :header="t('producto')"
                        field="cve_prod"
                        bodyStyle="text-align: left"
                        :pt="{
                            columnHeaderContent: {
                                class: 'justify-center                                            ',
                            },
                        }" />
                    <Column
                        :header="t('atributo')"
                        field="new_med"
                        bodyStyle="text-align: center"
                        :pt="{
                            columnHeaderContent: {
                                class: 'justify-center                                            ',
                            },
                        }" />
                    <!-- <Column
                        header="Moneda"
                        field="cve_prod"
                        :pt="{
                            columnHeaderContent: {
                                class: 'justify-center                                            '
                            }
                        }" /> -->
                    <Column
                        :header="t('precio')"
                        field="valor_prod"
                        bodyStyle="text-align: right"
                        :pt="{
                            columnHeaderContent: {
                                class: 'justify-center                                            ',
                            },
                        }" />
                    <Column
                        :header="t('importe')"
                        field="imp_calg"
                        bodyStyle="text-align: right"
                        :pt="{
                            columnHeaderContent: {
                                class: 'justify-center                                            ',
                            },
                        }" />
                    <Column
                        :header="t('subtotal')"
                        field="sub_calg"
                        bodyStyle="text-align: right"
                        :pt="{
                            columnHeaderContent: {
                                class: 'justify-center                                            ',
                            },
                        }" />
                    <Column
                        :header="t('total')"
                        field="tot_calg"
                        bodyStyle="text-align: right"
                        :pt="{
                            columnHeaderContent: {
                                class: 'justify-center                                            ',
                            },
                        }" />
                </DataTable>
            </div>
            <Button
                type="button"
                :label="t('regresar')"
                @click="$router.back()">
                <template #icon>
                    <i class="pi pi-arrow-left"></i>
                </template>
            </Button>
        </div>
    </Transition>
</template>

<i18n lang="json">
{
    "es": {
        "primero": "Primero",
        "anterior": "Anterior",
        "siguiente": "Siguiente",
        "ultimo": "Ultimo",
        "factura": "Factura",
        "contado": "Contado",
        "almacen": "Almacen",
        "facturado": "Facturado a",
        "entregado": "Entregado a",
        "otros": "Otros datos",
        "estadisticos": "Datos estadisticos",
        "agentes": "Agentes",
        "forma": "Forma de pago",
        "descuentos": "Descuentos",
        "cantidad": "Cantidad",
        "unidad": "Unidad",
        "producto": "Producto",
        "atributo": "Atributo",
        "precio": "Precio",
        "importe": "Importe",
        "subtotal": "Subtotal",
        "total": "Total",
        "regresar": "Regresar"
    },
    "en": {
        "primero": "First",
        "anterior": "Previous",
        "siguiente": "Next",
        "ultimo": "Last",
        "factura": "Invoice",
        "contado": "Cash",
        "almacen": "Warehouse",
        "facturado": "Billed to",
        "entregado": "Delivered to",
        "otros": "Other data",
        "estadisticos": "Statistical data",
        "agentes": "Agents",
        "forma": "Payment method",
        "descuentos": "Discounts",
        "cantidad": "Quantity",
        "unidad": "Unit",
        "producto": "Product",
        "atributo": "Attribute",
        "precio": "Price",
        "importe": "Amount",
        "subtotal": "Subtotal",
        "total": "Total",
        "regresar": "Go back"
    }
}
</i18n>
