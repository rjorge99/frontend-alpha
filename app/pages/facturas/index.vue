<script setup lang="ts">
import type { Factura, FacturaListado } from '~/types/facturas';

const listadoRequest = reactive({
    inicio: 1,
    fin: 20,
});
const { t } = useI18n({ useScope: 'local' });
const { width } = useBreakpoint();
const tableSize = computed(() => {
    if (width.value >= 2000)
        return 'medium';
    return 'small';
});

const {
    data: listadoFacturas,
    execute,
    pending,
} = await useApiLazyFetch<FacturaListado>(
    'api/empresas/1/clientes/facturas/listado',
    {
        method: 'POST',
        server: false,
        watch: false,
        body: listadoRequest,
    },
);

async function selectFactura({ data: factura }: { data: Factura }) {
    await navigateTo({
        path: '/facturas/detail',
        query: {
            clave: factura.cve_factu.trim(),
            folio: factura.no_fac.trim(),
        },
    });
}

function rowClass() {
    return ['cursor-pointer'];
}

function onPageChange(data: any) {
    const registrosInicio: number = data.page * 20;
    listadoRequest.inicio = registrosInicio + 1;
    listadoRequest.fin = registrosInicio + 20;
    execute();
}
</script>

<template>
    <ClientOnly>
        <DataTable
            reorderableCcolumns
            resizableColumns
            :size="tableSize"
            :loading="pending"
            showGridlines
            stripedRows
            selectionMode="single"
            paginator
            rowHover
            :value="listadoFacturas?.registros"
            :totalRecords="listadoFacturas?.totalRegistros"
            :rows="20"
            :rowClass="rowClass"
            lazy
            @row-select="selectFactura"
            @page="onPageChange">
            <template #header>
                <div>
                    <span class="text-2xl font-bold">{{ t('header') }}</span>
                </div>
            </template>
            <Column :header="t('cve')" field="cve_factu" />
            <Column :header="t('folio')" field="no_fac" />
            <Column :header="t('fecha')" field="falta_fac" />
            <Column :header="t('seg')" bodyStyle="text-align: center">
                <template #body="">
                    <i
                        class="pi pi-chevron-circle-right"
                        style="font-size: 20px; color: #10b981"></i>
                </template>
            </Column>
            <Column :header="t('cliente')" field="nom_cte" />
            <Column :header="t('almacen')" field="lugar" />
            <Column :header="t('agente')" field="nom_age" />
            <Column :header="t('total')" field="total_fac" />
            <Column :header="t('moneda')" field="cve_mon" />
            <Column :header="t('estatus')" field="status_fac" />
            <Column :header="t('cfdi')">
                <template #body="{ data }">
                    <i class="pi pi-file-pdf" style="font-size: 20px; color: #e28989"></i>
                    <i class="pi pi-file" style="font-size: 20px; color: #10b981"></i>
                    <i
                        class="pi pi-angle-right"
                        style="font-size: 20px"
                        @click="selectFactura(data)"></i>
                </template>
            </Column>
            <template #footer>
                {{ t('footer') }}
                {{ listadoFacturas ? listadoFacturas.totalRegistros : 0 }}.
            </template>
        </DataTable>
    </ClientOnly>
</template>

<i18n lang="json">
{
    "es": {
        "header": "Listado de facturas",
        "cve": "Cve",
        "folio": "Folio",
        "fecha": "Fecha",
        "seg": "Seg",
        "cliente": "Cliente",
        "almacen": "Almacen",
        "agente": "Agente",
        "total": "Total",
        "moneda": "Moneda",
        "estatus": "Estatus",
        "cfdi": "CFDI",
        "footer": "Total de productos"
    },
    "en": {
        "header": "Invoice List",
        "cve": "Code",
        "folio": "Folio",
        "fecha": "Date",
        "seg": "Seg",
        "cliente": "Customer",
        "almacen": "Warehouse",
        "agente": "Agent",
        "total": "Total",
        "moneda": "Currency",
        "estatus": "Status",
        "cfdi": "CFDI",
        "footer": "Total Products"
    }
}
</i18n>
