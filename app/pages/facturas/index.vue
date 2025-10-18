<script setup lang="ts">
    import type { Factura, FacturaListado } from '~/types/facturas';

    const listadoRequest = reactive({
        inicio: 1,
        fin: 20
    });

    const { width } = useBreakpoint();
    const tableSize = computed(() => {
        if (width.value >= 2000) return 'medium';
        return 'small';
    });

    const {
        data: listadoFacturas,
        execute,
        pending
    } = await useApiLazyFetch<FacturaListado>(
        'api/empresas/1/clientes/facturas/listado',
        {
            method: 'POST',
            server: false,
            watch: false,
            body: listadoRequest
        }
    );

    const selectFactura = async ({ data: factura }: { data: Factura }) => {
        await navigateTo({
            path: '/facturas/detail',
            query: {
                clave: factura.cve_factu.trim(),
                folio: factura.no_fac.trim()
            }
        });
    };

    const rowClass = () => {
        return ['cursor-pointer'];
    };

    const onPageChange = (data: any) => {
        const registrosInicio: number = data.page * 20;
        listadoRequest.inicio = registrosInicio + 1;
        listadoRequest.fin = registrosInicio + 20;
        execute();
    };
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
            @rowSelect="selectFactura"
            @page="onPageChange">
            <template #header>
                <div>
                    <span class="text-2xl font-bold">Listado de Facturas</span>
                </div>
            </template>
            <Column header="Cve" field="cve_factu" />
            <Column header="Folio" field="no_fac" />
            <Column header="Fecha" field="falta_fac" />
            <Column header="Seg" bodyStyle="text-align: center">
                <template #body="slotProps">
                    <i
                        class="pi pi-chevron-circle-right"
                        style="font-size: 20px; color: #10b981"></i>
                </template>
            </Column>
            <Column header="Cliente" field="nom_cte" />
            <Column header="Almacén" field="lugar" />
            <Column header="Agente" field="nom_age" />
            <Column header="Total" field="total_fac" />
            <Column header="Moneda" field="cve_mon" />
            <Column header="Estatus" field="status_fac" />
            <Column header="CFDI">
                <template #body="{ data }">
                    <i class="pi pi-file-pdf" style="font-size: 20px; color: #e28989"></i>
                    <i class="pi pi-file" style="font-size: 20px; color: #10b981"></i>
                    <i
                        class="pi pi-angle-right"
                        style="font-size: 20px"
                        @click="selectFactura(data)"></i>
                </template>
            </Column>
        </DataTable>
    </ClientOnly>
</template>
