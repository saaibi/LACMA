const Sample = require("../models/sample");

const dataModel = (data) => {
    const { code, version, reference, analyst, coordinator, typeSample, responsibleSample, quantity, lote, typeContainer, color, smell, appearance, characteristicsOrganoleptic, temperature, manufacturingDate, expirationDate, receiptDate, startDateAnalysis, endDateAnalysis, reportDate, agreedDeliveryDate, deliveryDate, takeSampleDate, products } = data;

    const createSample = {
        code: code,
        version: version,
        reference: reference,
        analyst: analyst,
        coordinator: coordinator,
        typeSample: typeSample,
        responsibleSample: responsibleSample,
        quantity: quantity,
        lote: lote,
        typeContainer: typeContainer,
        color: color,
        smell: smell,
        appearance: appearance,
        characteristicsOrganoleptic: characteristicsOrganoleptic,
        temperature: temperature,
        manufacturingDate: Date(manufacturingDate),
        expirationDate: Date(expirationDate),
        receiptDate: Date(receiptDate),
        startDateAnalysis: Date(startDateAnalysis),
        endDateAnalysis: Date(endDateAnalysis),
        reportDate: Date(reportDate),
        agreedDeliveryDate: Date(agreedDeliveryDate),
        deliveryDate: Date(deliveryDate),
        takeSampleDate: Date(takeSampleDate),
        products: products
    };

    const sample = new Sample(createSample);

    return sample;
}

module.exports = dataModel