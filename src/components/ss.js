//block
doCmd({ cmd: "RepoLifePolicy", data: { "operation": "GET", "filter": "id=" + _row.policyId, "include": ["Branch", "Holder", "Process", "Insureds", "Coverages", "Coverages.Loadings", "Coverages.Claims", "Coverages.Benefits", "Insureds.Contact", "Insureds.Contact.Occupation", "Surcharges", "Exclusions", "Clauses", "Documents", "PayPlan", "InvestmentPlan", "InvestmentSelections", "Beneficiaries", "Beneficiaries.Contact", "Requirements", "Events", "Accounts", "Accounts.Movements", "Accounts.PendingMovements", "Changes", "Changes.Bill", "Changes.BillUnique", "Changes.CancellationBill", "Changes.Process", "ComContract", "RiskAnalysis", "Tags", "Contingents", "ComContract.Contact", "ComContract.Commissions", "InsuredObjects"],noTracking:true}}).outData;

//PLAN NAME FOR WHICH EVER PLAN ON CORPORATE POLICY
var planName = "IMENA";

_row.datadoc = RepoLifePolicy.outData[0];

if(_row.datadoc.InsuredObjects.length==0){ return _row.datadoc;};

_row.jsonValuesParse = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == "3")[0].jValues);

_row.jsonValuesParse;
_row.datadoc.clauses = RepoLifePolicy.outData[0].Clauses;
_row.datadoc.customForm = { "test": "test" };
_row.datadoc.object1 = {};
var staffNumber = parseFloat(_row.jsonValuesParse.filter(x => x.name == "m")[0].userData[0]) + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m1")[0].userData[0]) + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m2")[0].userData[0]) + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m3")[0].userData[0]) + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m4")[0].userData[0]) + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m5")[0].userData[0]) + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m6")[0].userData[0]) + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m7")[0].userData[0]) + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m8")[0].userData[0]) + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m9")[0].userData[0]) + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m10")[0].userData[0]);

_row.datadoc.staffNumber = staffNumber;

var dependantNumber = parseFloat(_row.jsonValuesParse.filter(x => x.name == "m")[0].userData[0]) + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m1")[0].userData[0]) * 2 + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m2")[0].userData[0]) * 3 + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m3")[0].userData[0]) * 4 + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m4")[0].userData[0]) * 5 + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m5")[0].userData[0]) * 6 + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m6")[0].userData[0]) * 7 + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m7")[0].userData[0]) * 8 + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m8")[0].userData[0]) * 9 + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m9")[0].userData[0]) * 10 + parseFloat(_row.jsonValuesParse.filter(x => x.name == "m10")[0].userData[0]) * 11 - staffNumber;

_row.datadoc.dependantNumber = dependantNumber;


_row.datadoc.planName = planName;
_row.datadoc.totalPremiumAllObjects = 0;
var inpatientScope = _row.jsonValuesParse.filter(x => x.name == "inpatientScope")[0].userData;
_row.datadoc.object1.inpatientScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].jValues).filter(x => x.name == "inpatientScope")[0].values.filter(t => t.value == inpatientScope)[0].label;

var ipLimit = parseFloat(_row.jsonValuesParse.filter(x => x.name == "inpatient")[0].userData);
var ip1Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse.filter(x => x.name == "subCongenital")[0].userData[0]) / 100);
var ip2Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse.filter(x => x.name == "subOphtalmologic")[0].userData[0]) / 100);
var ip3Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse.filter(x => x.name == "subDental")[0].userData[0]) / 100);

_row.datadoc.object1.ipLimit = ipLimit;
_row.datadoc.object1.ip1Limit = ip1Limit;
_row.datadoc.object1.ip2Limit = ip2Limit;
_row.datadoc.object1.ip3Limit = ip3Limit;

var gradientChecked = _row.jsonValuesParse.filter(x => x.name == "gradientCheck")[0].userData;

_row.datadoc.object1.hasOutPatientGradient = gradientChecked != null && gradientChecked.find(x => x == "1") != null;
_row.datadoc.object1.hasDentalGradient = gradientChecked != null && gradientChecked.find(x => x == "2") != null;
_row.datadoc.object1.hasOpticalGradient = gradientChecked != null && gradientChecked.find(x => x == "3") != null;
_row.datadoc.object1.outpatientScopeGradient = "";
_row.datadoc.object1.opLimitGradient = "";
_row.datadoc.object1.opMemberGradient = "";
_row.datadoc.object1.dentalScopeGradient = "";
_row.datadoc.object1.dentalLimitGradient = "";
_row.datadoc.object1.dentalMemberGradient = "";
_row.datadoc.object1.opticalScopeGradient = "";
_row.datadoc.object1.opticalLimitGradient = "";
_row.datadoc.object1.opticalMemberGradient = "";

var opLimit = parseFloat(_row.jsonValuesParse.filter(x => x.name == "outpatient")[0].userData);
_row.datadoc.object1.opLimit = opLimit;

var outpatientScope = _row.jsonValuesParse.filter(x => x.name == "outpatientScope")[0].userData;
_row.datadoc.object1.outpatientScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].jValues).filter(x => x.name == "outpatientScope")[0].values.filter(t => t.value == outpatientScope)[0].label;

if (_row.datadoc.object1.hasOutPatientGradient) {
    var outpatientScopeG = _row.jsonValuesParse.filter(x => x.name == "outpatientScopeG")[0].userData;
    var opLimitG = parseFloat(_row.jsonValuesParse.filter(x => x.name == "outpatientG")[0].userData);
    _row.datadoc.object1.outpatientScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].jValues).filter(x => x.name == "outpatientScopeG")[0].values.filter(t => t.value == outpatientScopeG)[0].label;
    _row.datadoc.object1.opLimitGradient = opLimitG;
    _row.datadoc.object1.opMemberGradient = _row.jsonValuesParse.filter(x => x.name == "outpatientGradient")[0].userData;
}

var matLimit = parseFloat(_row.jsonValuesParse.filter(x => x.name == "maternity")[0].userData);
_row.datadoc.object1.matLimit = matLimit;

var maternityScope = _row.jsonValuesParse.filter(x => x.name == "maternityScope")[0].values.filter(v => v.selected == true)[0].label;
_row.datadoc.object1.maternityScope = maternityScope;

var dentalLimit = parseFloat(_row.jsonValuesParse.filter(x => x.name == "dental")[0].userData);
_row.datadoc.object1.dentalLimit = dentalLimit;

var dentalScope = _row.jsonValuesParse.filter(x => x.name == "dentalScope")[0].userData;
_row.datadoc.object1.dentalScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].jValues).filter(x => x.name == "dentalScope")[0].values.filter(t => t.value == dentalScope)[0].label;

if (_row.datadoc.object1.hasDentalGradient) {
    var dentalScopeG = _row.jsonValuesParse.filter(x => x.name == "dentalScopeG")[0].userData;
    var dentalLimitG = parseFloat(_row.jsonValuesParse.filter(x => x.name == "dentalG")[0].userData);
    _row.datadoc.object1.dentalScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].jValues).filter(x => x.name == "dentalScopeG")[0].values.filter(t => t.value == dentalScopeG)[0].label;
    _row.datadoc.object1.dentalLimitGradient = dentalLimitG;
    _row.datadoc.object1.dentalMemberGradient = _row.jsonValuesParse.filter(x => x.name == "dentalGradient")[0].userData;
}

var opticalLimit = parseFloat(_row.jsonValuesParse.filter(x => x.name == "optical")[0].userData);
_row.datadoc.object1.opticalLimit = opticalLimit;

var opticalScope = _row.jsonValuesParse.filter(x => x.name == "opticalScope")[0].userData;
_row.datadoc.object1.opticalScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].jValues).filter(x => x.name == "opticalScope")[0].values.filter(t => t.value == opticalScope)[0].label;

if (_row.datadoc.object1.hasOpticalGradient) {
    var opticalScopeG = _row.jsonValuesParse.filter(x => x.name == "opticalScopeG")[0].userData;
    var opticalLimitG = parseFloat(_row.jsonValuesParse.filter(x => x.name == "opticalG")[0].userData);
    _row.datadoc.object1.opticalScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].jValues).filter(x => x.name == "opticalScopeG")[0].values.filter(t => t.value == opticalScopeG)[0].label;
    _row.datadoc.object1.opticalLimitGradient = opticalLimitG;
    _row.datadoc.object1.opticalMemberGradient = _row.jsonValuesParse.filter(x => x.name == "opticalGradient")[0].userData;
}

doCmd({ "cmd": "GetTableRows", "data": { "table": "MedicalCorporateFUNERALTariff", "column": " TIPO TARIFICACION ", "filterValue": " TF ", "getColumn1": " TIPO TARIFICACION ", "getColumn2": ipLimit } });
var lastExpenseLimit = parseFloat(GetTableRows.outData[0].column2);
_row.datadoc.object1.lastExpenseLimit = lastExpenseLimit;

/*Get Fields to print on Full Insurance Quotations*/
_row.datadoc.object1.totalBasePremium = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].userData.totalBasePremium));

_row.datadoc.object1.mds = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].userData.mds));

_row.datadoc.object1.adminFee = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].userData.adminFee));

_row.datadoc.object1.totalInsuranceSide = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].userData.totalInsuranceSide));

/*Get Fields to print on Fund Management Quotations*/
_row.datadoc.object1.estimatedFundSize = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].userData.totalBaseInsuranceSide));

_row.datadoc.object1.fundAdminFee = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].userData.fundFee));

_row.datadoc.object1.vat = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].userData.vat));

_row.datadoc.object1.totalFundAmount = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].userData.totalFundAmount));

/*Get Total Amount*/
_row.datadoc.object1.formTotalPremium = _row.datadoc.object1.totalInsuranceSide + _row.datadoc.object1.totalFundAmount;

var branch = RepoLifePolicy.outData[0].Branch != null ? RepoLifePolicy.outData[0].Branch.name : 'Prime Insurance Headquarters';

var today = new Date();
_row.datadoc.object1.branch = branch;
_row.datadoc.object1.today = today;

_row.datadoc.branch = branch;
_row.datadoc.today = today;
_row.datadoc.validity = "30 days";
_row.datadoc.insuredTypedoc = "Corporate";

var sellerName = "Direct Bussiness";

if (_row.datadoc.sellerId > 0 || _row.datadoc.sellerId != null) {
    doCmd({ cmd: "GetContacts", data: { filter: "id=" + _row.datadoc.sellerId } });
    var sellerName = GetContacts.outData[0].FullName;
}

_row.datadoc.sellerName = sellerName;

/*Additional Fields on Custom Form*/
var copaymentId = parseFloat(_row.jsonValuesParse.filter(x => x.name == "copayment")[0].userData);

switch (copaymentId) {
    case 0:
        var copayment = "null";
        break;
    case 5:
        var copayment = "5% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
        break;
    case 10:
        var copayment = "10% on Outpatient Services and 100% No.Co-Pay on INPA&MATE ";
        break;
    case 15:
        var copayment = "15% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
        break;
    case 20:
        var copayment = "20% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
        break;
    case 25:
        var copayment = "25% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
        break;
}
_row.datadoc.object1.copayment = copayment;

var serviceProviderId = _row.jsonValuesParse.filter(x => x.name == "territory")[0].userData;
var serviceProvider = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].jValues).filter(x => x.name == "territory")[0].values.filter(t => t.value == serviceProviderId)[0].label;

_row.datadoc.object1.serviceProviderSelect = serviceProvider;
_row.datadoc.object1.territorial = serviceProvider;

var channelId = _row.jsonValuesParse.filter(x => x.name == "channel")[0].userData;
var channel = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 3)[0].jValues).filter(x => x.name == "channel")[0].values.filter(t => t.value == channelId)[0].label;

_row.datadoc.object1.channel = channel;

var optionQuotePlan = _row.jsonValuesParse.filter(x => x.name == "quotePlan")[0].userData[0];
var quotePlan = _row.jsonValuesParse.filter(x => x.name == "quotePlan")[0].values.filter(a => a.value == optionQuotePlan)[0].label
_row.datadoc.object1.quotePlan = quotePlan;

/*var datadocFullInsurance = [];
    var datadocFund = [];*/

if (quotePlan == "Full Insurance") {
    datadocFullInsurance = _row.datadoc.customForm;
} else {
    datadocFund = _row.datadoc.customForm;
    datadocFund.currency = _row.datadoc.currency
    _row.datadoc.object1.Fund = {
        "currency": _row.datadoc.currency,
        "estimatedFundSize": _row.datadoc.object1.estimatedFundSize,
        "fundAdminFee": _row.datadoc.object1.fundAdminFee,
        "vat": _row.datadoc.object1.vat,
        "totalFundAmount": _row.datadoc.object1.totalFundAmount,
        "formTotalPremium": _row.datadoc.object1.formTotalPremium
    }
};

_row.datadoc.totalPremiumAllObjects += _row.datadoc.object1.formTotalPremium;
/*_row.datadoc.object1.Full = datadocFullInsurance;
_row.datadoc.object1.Fund = datadocFund;*/


// CONDITIONAL STRUCTURE FOR SECOND QUOTATION OBJECT
if (_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5).length == 0) {
    //do nothing
} else {
    _row.jsonValuesParse2 = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].jValues);

    _row.jsonValuesParse2;

    _row.datadoc.object2 = { "test": "test" };
    _row.datadoc.object2.Holder = _row.datadoc.Holder;
    _row.datadoc.object2.currency = _row.datadoc.currency;

    var staffNumber = parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m")[0].userData[0]) + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m1")[0].userData[0]) + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m2")[0].userData[0]) + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m3")[0].userData[0]) + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m4")[0].userData[0]) + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m5")[0].userData[0]) + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m6")[0].userData[0]) + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m7")[0].userData[0]) + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m8")[0].userData[0]) + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m9")[0].userData[0]) + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m10")[0].userData[0]);

    _row.datadoc.object2.staffNumber = staffNumber;

    var dependantNumber = parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m")[0].userData[0]) + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m1")[0].userData[0]) * 2 + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m2")[0].userData[0]) * 3 + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m3")[0].userData[0]) * 4 + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m4")[0].userData[0]) * 5 + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m5")[0].userData[0]) * 6 + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m6")[0].userData[0]) * 7 + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m7")[0].userData[0]) * 8 + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m8")[0].userData[0]) * 9 + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m9")[0].userData[0]) * 10 + parseFloat(_row.jsonValuesParse2.filter(x => x.name == "m10")[0].userData[0]) * 11 - staffNumber;

    _row.datadoc.object2.dependantNumber = dependantNumber;


    _row.datadoc.object2.planName = planName;

    var inpatientScope = _row.jsonValuesParse2.filter(x => x.name == "inpatientScope")[0].userData;
    _row.datadoc.object2.inpatientScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].jValues).filter(x => x.name == "inpatientScope")[0].values.filter(t => t.value == inpatientScope)[0].label;

    var ipLimit = parseFloat(_row.jsonValuesParse2.filter(x => x.name == "inpatient")[0].userData);
    var ip1Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse2.filter(x => x.name == "subCongenital")[0].userData[0]) / 100);
    var ip2Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse2.filter(x => x.name == "subOphtalmologic")[0].userData[0]) / 100);
    var ip3Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse2.filter(x => x.name == "subDental")[0].userData[0]) / 100);

    _row.datadoc.object2.ipLimit = ipLimit;
    _row.datadoc.object2.ip1Limit = ip1Limit;
    _row.datadoc.object2.ip2Limit = ip2Limit;
    _row.datadoc.object2.ip3Limit = ip3Limit;

    var opLimit = parseFloat(_row.jsonValuesParse2.filter(x => x.name == "outpatient")[0].userData);
    _row.datadoc.object2.opLimit = opLimit;

    var outpatientScope = _row.jsonValuesParse2.filter(x => x.name == "outpatientScope")[0].userData;
    _row.datadoc.object2.outpatientScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].jValues).filter(x => x.name == "outpatientScope")[0].values.filter(t => t.value == outpatientScope)[0].label;

    var gradientChecked = _row.jsonValuesParse2.filter(x => x.name == "gradientCheck")[0].userData;

    _row.datadoc.object2.hasOutPatientGradient = gradientChecked != null && gradientChecked.find(x => x == "1") != null;
    _row.datadoc.object2.hasDentalGradient = gradientChecked != null && gradientChecked.find(x => x == "2") != null;
    _row.datadoc.object2.hasOpticalGradient = gradientChecked != null && gradientChecked.find(x => x == "3") != null;
    _row.datadoc.object2.outpatientScopeGradient = "";
    _row.datadoc.object2.opLimitGradient = "";
    _row.datadoc.object2.opMemberGradient = "";
    _row.datadoc.object2.dentalScopeGradient = "";
    _row.datadoc.object2.dentalLimitGradient = "";
    _row.datadoc.object2.dentalMemberGradient = "";
    _row.datadoc.object2.opticalScopeGradient = "";
    _row.datadoc.object2.opticalLimitGradient = "";
    _row.datadoc.object2.opticalMemberGradient = "";


    if (_row.datadoc.object2.hasOutPatientGradient) {
        var outpatientScopeG = _row.jsonValuesParse2.filter(x => x.name == "outpatientScopeG")[0].userData;
        var opLimitG = parseFloat(_row.jsonValuesParse2.filter(x => x.name == "outpatientG")[0].userData);
        _row.datadoc.object2.outpatientScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].jValues).filter(x => x.name == "outpatientScopeG")[0].values.filter(t => t.value == outpatientScopeG)[0].label;
        _row.datadoc.object2.opLimitGradient = opLimitG;
        _row.datadoc.object2.opMemberGradient = _row.jsonValuesParse2.filter(x => x.name == "outpatientGradient")[0].userData;
    }

    if (_row.datadoc.object2.hasDentalGradient) {
        var dentalScopeG = _row.jsonValuesParse2.filter(x => x.name == "dentalScopeG")[0].userData;
        var dentalLimitG = parseFloat(_row.jsonValuesParse2.filter(x => x.name == "dentalG")[0].userData);
        _row.datadoc.object2.dentalScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].jValues).filter(x => x.name == "dentalScopeG")[0].values.filter(t => t.value == dentalScopeG)[0].label;
        _row.datadoc.object2.dentalLimitGradient = dentalLimitG;
        _row.datadoc.object2.dentalMemberGradient = _row.jsonValuesParse2.filter(x => x.name == "dentalGradient")[0].userData;
    }

    if (_row.datadoc.object2.hasOpticalGradient) {
        var opticalScopeG = _row.jsonValuesParse2.filter(x => x.name == "opticalScopeG")[0].userData;
        var opticalLimitG = parseFloat(_row.jsonValuesParse2.filter(x => x.name == "opticalG")[0].userData);
        _row.datadoc.object2.opticalScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].jValues).filter(x => x.name == "opticalScopeG")[0].values.filter(t => t.value == opticalScopeG)[0].label;
        _row.datadoc.object2.opticalLimitGradient = opticalLimitG;
        _row.datadoc.object2.opticalMemberGradient = _row.jsonValuesParse2.filter(x => x.name == "opticalGradient")[0].userData;
    }

    var matLimit = parseFloat(_row.jsonValuesParse2.filter(x => x.name == "maternity")[0].userData);
    _row.datadoc.object2.matLimit = matLimit;

    var maternityScope = _row.jsonValuesParse2.filter(x => x.name == "maternityScope")[0].values.filter(v => v.selected == true)[0].label;
    _row.datadoc.object2.maternityScope = maternityScope;

    var dentalLimit = parseFloat(_row.jsonValuesParse2.filter(x => x.name == "dental")[0].userData);
    _row.datadoc.object2.dentalLimit = dentalLimit;

    var dentalScope = _row.jsonValuesParse2.filter(x => x.name == "dentalScope")[0].userData;
    _row.datadoc.object2.dentalScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].jValues).filter(x => x.name == "dentalScope")[0].values.filter(t => t.value == dentalScope)[0].label;

    var opticalLimit = parseFloat(_row.jsonValuesParse2.filter(x => x.name == "optical")[0].userData);
    _row.datadoc.object2.opticalLimit = opticalLimit;

    var opticalScope = _row.jsonValuesParse2.filter(x => x.name == "opticalScope")[0].userData;
    _row.datadoc.object2.opticalScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].jValues).filter(x => x.name == "opticalScope")[0].values.filter(t => t.value == opticalScope)[0].label;

    doCmd({ "cmd": "GetTableRows", "data": { "table": "MedicalCorporateFUNERALTariff", "column": " TIPO TARIFICACION ", "filterValue": " TF ", "getColumn1": " TIPO TARIFICACION ", "getColumn2": ipLimit } });
  
    var lastExpenseLimit = parseFloat(GetTableRows.outData[0].column2);
    _row.datadoc.object2.lastExpenseLimit = lastExpenseLimit;

    /*Get Fields to print on Full Insurance Quotations*/
    _row.datadoc.object2.totalBasePremium = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].userData.totalBasePremium));

    _row.datadoc.object2.mds = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].userData.mds));

    _row.datadoc.object2.adminFee = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].userData.adminFee));

    _row.datadoc.object2.totalInsuranceSide = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].userData.totalInsuranceSide));

    /*Get Fields to print on Fund Management Quotations*/
    _row.datadoc.object2.estimatedFundSize = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].userData.totalBaseInsuranceSide));

    _row.datadoc.object2.fundAdminFee = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].userData.fundFee));

    _row.datadoc.object2.vat = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].userData.vat));

    _row.datadoc.object2.totalFundAmount = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].userData.totalFundAmount));

    /*Get Total Amount*/
    _row.datadoc.object2.formTotalPremium = _row.datadoc.object2.totalInsuranceSide + _row.datadoc.object2.totalFundAmount;

    /*var branch = _row.jsonValuesParse.filter(x => x.name == "branch")[0].values.filter(t => t.selected == true)[0].label;*/
    /*var branchId = _row.jsonValuesParse2.filter(x => x.name == "branch")[0].userData;

    /* Get branch name from BRANCH TABLE using the branchId caugth on the InsuredObject*/
//    doCmd({ "cmd": "GetTable", "data": { "table": "PrimeBranchAndFranchiseList", "column": "S/N", "row": branchId.toString(), "getColumn": "Branch Name", "notFoundValue": null, "useCache": false } });

  //  var branch = GetTable.outData;

    var today = new Date();
  //  _row.datadoc.object2.branch = branch;
    _row.datadoc.object2.today = today;

    /*Additional Fields on Custom Form*/
    var copaymentId = parseFloat(_row.jsonValuesParse2.filter(x => x.name == "copayment")[0].userData);

    switch (copaymentId) {
        case 0:
            var copayment = "null";
            break;
        case 5:
            var copayment = "5% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 10:
            var copayment = "10% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 15:
            var copayment = "15% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 20:
            var copayment = "20% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 25:
            var copayment = "25% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
    }

    _row.datadoc.object2.copayment = copayment;

    var serviceProviderId = _row.jsonValuesParse2.filter(x => x.name == "territory")[0].userData;
    var serviceProvider = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].jValues).filter(x => x.name == "territory")[0].values.filter(t => t.value == serviceProviderId)[0].label;

    _row.datadoc.object2.serviceProviderSelect = serviceProvider;
    _row.datadoc.object2.territorial = serviceProvider;

    var channelId = _row.jsonValuesParse2.filter(x => x.name == "channel")[0].userData;
    var channel = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 5)[0].jValues).filter(x => x.name == "channel")[0].values.filter(t => t.value == channelId)[0].label;

    _row.datadoc.object2.channel = channel;

    var optionQuotePlan = _row.jsonValuesParse2.filter(x => x.name == "quotePlan")[0].userData[0];
    var quotePlan = _row.jsonValuesParse2.filter(x => x.name == "quotePlan")[0].values.filter(a => a.value == optionQuotePlan)[0].label
    _row.datadoc.object1.quotePlan = quotePlan;

    /*var datadocFullInsurance = [];
    var datadocFund = [];*/

    if (quotePlan == "Full Insurance") {
        datadocFullInsurance = _row.datadoc.object2;
    } else {
        datadocFund = _row.datadoc.object2;
        datadocFund.currency = _row.datadoc.currency
        _row.datadoc.object2.Fund = {
            "currency": _row.datadoc.currency,
            "estimatedFundSize": _row.datadoc.object2.estimatedFundSize,
            "fundAdminFee": _row.datadoc.object2.fundAdminFee,
            "vat": _row.datadoc.object2.vat,
            "totalFundAmount": _row.datadoc.object2.totalFundAmount,
            "formTotalPremium": _row.datadoc.object2.formTotalPremium
        }
    };
  
  	_row.datadoc.totalPremiumAllObjects += _row.datadoc.object2.formTotalPremium;

    /*_row.datadoc.object2.Full = datadocFullInsurance;
    _row.datadoc.object2.Fund = datadocFund;*/

} // END OF IF ELSE FOR SECOND QUOTATION OBJECT



// CONDITIONAL STRUCTURE FOR THIRD QUOTATION OBJECT
if (_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6).length == 0) {
    //do nothing
    _row.datadoc.form3 = false
} else {
    _row.datadoc.form3 = true;
    _row.jsonValuesParse3 = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].jValues);

    _row.jsonValuesParse3;

    _row.datadoc.object3 = { "test": "test" };
    _row.datadoc.object3.Holder = _row.datadoc.Holder;
    _row.datadoc.object3.currency = _row.datadoc.currency;

    var staffNumber = parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m")[0].userData[0]) + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m1")[0].userData[0]) + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m2")[0].userData[0]) + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m3")[0].userData[0]) + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m4")[0].userData[0]) + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m5")[0].userData[0]) + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m6")[0].userData[0]) + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m7")[0].userData[0]) + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m8")[0].userData[0]) + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m9")[0].userData[0]) + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m10")[0].userData[0]);

    _row.datadoc.object3.staffNumber = staffNumber;

    var dependantNumber = parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m")[0].userData[0]) + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m1")[0].userData[0]) * 2 + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m2")[0].userData[0]) * 3 + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m3")[0].userData[0]) * 4 + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m4")[0].userData[0]) * 5 + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m5")[0].userData[0]) * 6 + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m6")[0].userData[0]) * 7 + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m7")[0].userData[0]) * 8 + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m8")[0].userData[0]) * 9 + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m9")[0].userData[0]) * 10 + parseFloat(_row.jsonValuesParse3.filter(x => x.name == "m10")[0].userData[0]) * 11 - staffNumber;

    _row.datadoc.object3.dependantNumber = dependantNumber;


    _row.datadoc.object3.planName = planName;

    var inpatientScope = _row.jsonValuesParse3.filter(x => x.name == "inpatientScope")[0].userData;
    _row.datadoc.object3.inpatientScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].jValues).filter(x => x.name == "inpatientScope")[0].values.filter(t => t.value == inpatientScope)[0].label;

    var ipLimit = parseFloat(_row.jsonValuesParse3.filter(x => x.name == "inpatient")[0].userData);
    var ip1Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse3.filter(x => x.name == "subCongenital")[0].userData[0]) / 100);
    var ip2Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse3.filter(x => x.name == "subOphtalmologic")[0].userData[0]) / 100);
    var ip3Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse3.filter(x => x.name == "subDental")[0].userData[0]) / 100);

    _row.datadoc.object3.ipLimit = ipLimit;
    _row.datadoc.object3.ip1Limit = ip1Limit;
    _row.datadoc.object3.ip2Limit = ip2Limit;
    _row.datadoc.object3.ip3Limit = ip3Limit;

    var gradientChecked = _row.jsonValuesParse3.filter(x => x.name == "gradientCheck")[0].userData;

    _row.datadoc.object3.hasOutPatientGradient = gradientChecked != null && gradientChecked.find(x => x == "1") != null;
    _row.datadoc.object3.hasDentalGradient = gradientChecked != null && gradientChecked.find(x => x == "2") != null;
    _row.datadoc.object3.hasOpticalGradient = gradientChecked != null && gradientChecked.find(x => x == "3") != null;
    _row.datadoc.object3.outpatientScopeGradient = "";
    _row.datadoc.object3.opLimitGradient = "";
    _row.datadoc.object3.opMemberGradient = "";
    _row.datadoc.object3.dentalScopeGradient = "";
    _row.datadoc.object3.dentalLimitGradient = "";
    _row.datadoc.object3.dentalMemberGradient = "";
    _row.datadoc.object3.opticalScopeGradient = "";
    _row.datadoc.object3.opticalLimitGradient = "";
    _row.datadoc.object3.opticalMemberGradient = "";


    if (_row.datadoc.object3.hasOutPatientGradient) {
        var outpatientScopeG = _row.jsonValuesParse3.filter(x => x.name == "outpatientScopeG")[0].userData;
        var opLimitG = parseFloat(_row.jsonValuesParse3.filter(x => x.name == "outpatientG")[0].userData);
        _row.datadoc.object3.outpatientScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].jValues).filter(x => x.name == "outpatientScopeG")[0].values.filter(t => t.value == outpatientScopeG)[0].label;
        _row.datadoc.object3.opLimitGradient = opLimitG;
        _row.datadoc.object3.opMemberGradient = _row.jsonValuesParse3.filter(x => x.name == "outpatientGradient")[0].userData;
    }

    if (_row.datadoc.object3.hasDentalGradient) {
        var dentalScopeG = _row.jsonValuesParse3.filter(x => x.name == "dentalScopeG")[0].userData;
        var dentalLimitG = parseFloat(_row.jsonValuesParse3.filter(x => x.name == "dentalG")[0].userData);
        _row.datadoc.object3.dentalScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].jValues).filter(x => x.name == "dentalScopeG")[0].values.filter(t => t.value == dentalScopeG)[0].label;
        _row.datadoc.object3.dentalLimitGradient = dentalLimitG;
        _row.datadoc.object3.dentalMemberGradient = _row.jsonValuesParse3.filter(x => x.name == "dentalGradient")[0].userData;
    }

    if (_row.datadoc.object3.hasOpticalGradient) {
        var opticalScopeG = _row.jsonValuesParse3.filter(x => x.name == "opticalScopeG")[0].userData;
        var opticalLimitG = parseFloat(_row.jsonValuesParse3.filter(x => x.name == "opticalG")[0].userData);
        _row.datadoc.object3.opticalScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].jValues).filter(x => x.name == "opticalScopeG")[0].values.filter(t => t.value == opticalScopeG)[0].label;
        _row.datadoc.object3.opticalLimitGradient = opticalLimitG;
        _row.datadoc.object3.opticalMemberGradient = _row.jsonValuesParse3.filter(x => x.name == "opticalGradient")[0].userData;
    }

    var opLimit = parseFloat(_row.jsonValuesParse3.filter(x => x.name == "outpatient")[0].userData);
    _row.datadoc.object3.opLimit = opLimit;

    var outpatientScope = _row.jsonValuesParse3.filter(x => x.name == "outpatientScope")[0].userData;
    _row.datadoc.object3.outpatientScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].jValues).filter(x => x.name == "outpatientScope")[0].values.filter(t => t.value == outpatientScope)[0].label;

    var matLimit = parseFloat(_row.jsonValuesParse3.filter(x => x.name == "maternity")[0].userData);
    _row.datadoc.object3.matLimit = matLimit;

    var maternityScope = _row.jsonValuesParse3.filter(x => x.name == "maternityScope")[0].values.filter(v => v.selected == true)[0].label;
    _row.datadoc.object3.maternityScope = maternityScope;

    var dentalLimit = parseFloat(_row.jsonValuesParse3.filter(x => x.name == "dental")[0].userData);
    _row.datadoc.object3.dentalLimit = dentalLimit;

    var dentalScope = _row.jsonValuesParse3.filter(x => x.name == "dentalScope")[0].userData;
    _row.datadoc.object3.dentalScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].jValues).filter(x => x.name == "dentalScope")[0].values.filter(t => t.value == dentalScope)[0].label;

    var opticalLimit = parseFloat(_row.jsonValuesParse3.filter(x => x.name == "optical")[0].userData);
    _row.datadoc.object3.opticalLimit = opticalLimit;

    var opticalScope = _row.jsonValuesParse3.filter(x => x.name == "opticalScope")[0].userData;
    _row.datadoc.object3.opticalScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].jValues).filter(x => x.name == "opticalScope")[0].values.filter(t => t.value == opticalScope)[0].label;

    doCmd({ "cmd": "GetTableRows", "data": { "table": "MedicalCorporateFUNERALTariff", "column": " TIPO TARIFICACION ", "filterValue": " TF ", "getColumn1": " TIPO TARIFICACION ", "getColumn2": ipLimit } });
    var lastExpenseLimit = parseFloat(GetTableRows.outData[0].column2);
    _row.datadoc.object3.lastExpenseLimit = lastExpenseLimit;

    /*Get Fields to print on Full Insurance Quotations*/
    _row.datadoc.object3.totalBasePremium = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].userData.totalBasePremium));

    _row.datadoc.object3.mds = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].userData.mds));

    _row.datadoc.object3.adminFee = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].userData.adminFee));

    _row.datadoc.object3.totalInsuranceSide = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].userData.totalInsuranceSide));

    /*Get Fields to print on Fund Management Quotations*/
    _row.datadoc.object3.estimatedFundSize = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].userData.totalBaseInsuranceSide));

    _row.datadoc.object3.fundAdminFee = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].userData.fundFee));

    _row.datadoc.object3.vat = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].userData.vat));

    _row.datadoc.object3.totalFundAmount = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].userData.totalFundAmount));

    /*Get Total Amount*/
    _row.datadoc.object3.formTotalPremium = _row.datadoc.object3.totalInsuranceSide + _row.datadoc.object3.totalFundAmount;

    /*var branch = _row.jsonValuesParse.filter(x => x.name == "branch")[0].values.filter(t => t.selected == true)[0].label;*/
    var branchId = _row.jsonValuesParse3.filter(x => x.name == "branch")[0].userData;

    /* Get branch name from BRANCH TABLE using the branchId caugth on the InsuredObject*/
    doCmd({ "cmd": "GetTable", "data": { "table": "PrimeBranchAndFranchiseList", "column": "S/N", "row": branchId.toString(), "getColumn": "Branch Name", "notFoundValue": null, "useCache": false } });

    var branch = GetTable.outData;

    var today = new Date();
    _row.datadoc.object3.branch = branch;
    _row.datadoc.object3.today = today;

    /*Additional Fields on Custom Form*/
    var copaymentId = parseFloat(_row.jsonValuesParse3.filter(x => x.name == "copayment")[0].userData);

    switch (copaymentId) {
        case 0:
            var copayment = "null";
            break;
        case 5:
            var copayment = "5% on Outpatient Services and 100% No.Co-Pay on INPA&MATE5%";
            break;
        case 10:
            var copayment = "5% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 15:
            var copayment = "15% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 20:
            var copayment = "20% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 25:
            var copayment = "25% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
    }

    _row.datadoc.object3.copayment = copayment;

    var serviceProviderId = _row.jsonValuesParse3.filter(x => x.name == "territory")[0].userData;
    var serviceProvider = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].jValues).filter(x => x.name == "territory")[0].values.filter(t => t.value == serviceProviderId)[0].label;

    _row.datadoc.object3.serviceProviderSelect = serviceProvider;
    _row.datadoc.object3.territorial = serviceProvider;

    var channelId = _row.jsonValuesParse3.filter(x => x.name == "channel")[0].userData;
    var channel = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 6)[0].jValues).filter(x => x.name == "channel")[0].values.filter(t => t.value == channelId)[0].label;

    _row.datadoc.object3.channel = channel;

    var optionQuotePlan = _row.jsonValuesParse3.filter(x => x.name == "quotePlan")[0].userData[0];
    var quotePlan = _row.jsonValuesParse3.filter(x => x.name == "quotePlan")[0].values.filter(a => a.value == optionQuotePlan)[0].label
    _row.datadoc.object3.quotePlan = quotePlan;

    /*var datadocFullInsurance = [];
    var datadocFund = [];*/

    if (quotePlan == "Full Insurance") {
        datadocFullInsurance = _row.datadoc.object3;
    } else {
        datadocFund = _row.datadoc.object3;
        datadocFund.currency = _row.datadoc.currency
        _row.datadoc.object3.Fund = {
            "currency": _row.datadoc.currency,
            "estimatedFundSize": _row.datadoc.object3.estimatedFundSize,
            "fundAdminFee": _row.datadoc.object3.fundAdminFee,
            "vat": _row.datadoc.object3.vat,
            "totalFundAmount": _row.datadoc.object3.totalFundAmount,
            "formTotalPremium": _row.datadoc.object3.formTotalPremium
        }
    };
	_row.datadoc.totalPremiumAllObjects += _row.datadoc.object3.formTotalPremium;
    /*_row.datadoc.object3.Full = datadocFullInsurance;
    _row.datadoc.object3.Fund = datadocFund;*/

} // END OF IF ELSE FOR THIRD QUOTATION OBJECT

// CONDITIONAL STRUCTURE FOR FOURTH QUOTATION OBJECT
if (_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9).length == 0) {
    //do nothing
    _row.datadoc.form4 = false
} else {
    _row.datadoc.form4 = true;
    _row.jsonValuesParse4 = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].jValues);

    _row.jsonValuesParse4;

    _row.datadoc.object4 = { "test": "test" };
    _row.datadoc.object4.Holder = _row.datadoc.Holder;
    _row.datadoc.object4.currency = _row.datadoc.currency;

    var staffNumber = parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m")[0].userData[0]) + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m1")[0].userData[0]) + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m2")[0].userData[0]) + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m3")[0].userData[0]) + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m4")[0].userData[0]) + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m5")[0].userData[0]) + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m6")[0].userData[0]) + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m7")[0].userData[0]) + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m8")[0].userData[0]) + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m9")[0].userData[0]) + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m10")[0].userData[0]);

    _row.datadoc.object4.staffNumber = staffNumber;

    var dependantNumber = parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m")[0].userData[0]) + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m1")[0].userData[0]) * 2 + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m2")[0].userData[0]) * 3 + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m3")[0].userData[0]) * 4 + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m4")[0].userData[0]) * 5 + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m5")[0].userData[0]) * 6 + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m6")[0].userData[0]) * 7 + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m7")[0].userData[0]) * 8 + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m8")[0].userData[0]) * 9 + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m9")[0].userData[0]) * 10 + parseFloat(_row.jsonValuesParse4.filter(x => x.name == "m10")[0].userData[0]) * 11 - staffNumber;

    _row.datadoc.object4.dependantNumber = dependantNumber;


    _row.datadoc.object4.planName = planName;

    var inpatientScope = _row.jsonValuesParse4.filter(x => x.name == "inpatientScope")[0].userData;
    _row.datadoc.object4.inpatientScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].jValues).filter(x => x.name == "inpatientScope")[0].values.filter(t => t.value == inpatientScope)[0].label;

    var ipLimit = parseFloat(_row.jsonValuesParse4.filter(x => x.name == "inpatient")[0].userData);
    var ip1Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse4.filter(x => x.name == "subCongenital")[0].userData[0]) / 100);
    var ip2Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse4.filter(x => x.name == "subOphtalmologic")[0].userData[0]) / 100);
    var ip3Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse4.filter(x => x.name == "subDental")[0].userData[0]) / 100);

    _row.datadoc.object4.ipLimit = ipLimit;
    _row.datadoc.object4.ip1Limit = ip1Limit;
    _row.datadoc.object4.ip2Limit = ip2Limit;
    _row.datadoc.object4.ip3Limit = ip3Limit;

    var gradientChecked = _row.jsonValuesParse4.filter(x => x.name == "gradientCheck")[0].userData;

    _row.datadoc.object4.hasOutPatientGradient = gradientChecked != null && gradientChecked.find(x => x == "1") != null;
    _row.datadoc.object4.hasDentalGradient = gradientChecked != null && gradientChecked.find(x => x == "2") != null;
    _row.datadoc.object4.hasOpticalGradient = gradientChecked != null && gradientChecked.find(x => x == "3") != null;
    _row.datadoc.object4.outpatientScopeGradient = "";
    _row.datadoc.object4.opLimitGradient = "";
    _row.datadoc.object4.opMemberGradient = "";
    _row.datadoc.object4.dentalScopeGradient = "";
    _row.datadoc.object4.dentalLimitGradient = "";
    _row.datadoc.object4.dentalMemberGradient = "";
    _row.datadoc.object4.opticalScopeGradient = "";
    _row.datadoc.object4.opticalLimitGradient = "";
    _row.datadoc.object4.opticalMemberGradient = "";


    if (_row.datadoc.object4.hasOutPatientGradient) {
        var outpatientScopeG = _row.jsonValuesParse4.filter(x => x.name == "outpatientScopeG")[0].userData;
        var opLimitG = parseFloat(_row.jsonValuesParse4.filter(x => x.name == "outpatientG")[0].userData);
        _row.datadoc.object4.outpatientScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].jValues).filter(x => x.name == "outpatientScopeG")[0].values.filter(t => t.value == outpatientScopeG)[0].label;
        _row.datadoc.object4.opLimitGradient = opLimitG;
        _row.datadoc.object4.opMemberGradient = _row.jsonValuesParse4.filter(x => x.name == "outpatientGradient")[0].userData;
    }

    if (_row.datadoc.object4.hasDentalGradient) {
        var dentalScopeG = _row.jsonValuesParse4.filter(x => x.name == "dentalScopeG")[0].userData;
        var dentalLimitG = parseFloat(_row.jsonValuesParse4.filter(x => x.name == "dentalG")[0].userData);
        _row.datadoc.object4.dentalScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].jValues).filter(x => x.name == "dentalScopeG")[0].values.filter(t => t.value == dentalScopeG)[0].label;
        _row.datadoc.object4.dentalLimitGradient = dentalLimitG;
        _row.datadoc.object4.dentalMemberGradient = _row.jsonValuesParse4.filter(x => x.name == "dentalGradient")[0].userData;
    }

    if (_row.datadoc.object4.hasOpticalGradient) {
        var opticalScopeG = _row.jsonValuesParse4.filter(x => x.name == "opticalScopeG")[0].userData;
        var opticalLimitG = parseFloat(_row.jsonValuesParse4.filter(x => x.name == "opticalG")[0].userData);
        _row.datadoc.object4.opticalScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].jValues).filter(x => x.name == "opticalScopeG")[0].values.filter(t => t.value == opticalScopeG)[0].label;
        _row.datadoc.object4.opticalLimitGradient = opticalLimitG;
        _row.datadoc.object4.opticalMemberGradient = _row.jsonValuesParse4.filter(x => x.name == "opticalGradient")[0].userData;
    }

    var opLimit = parseFloat(_row.jsonValuesParse4.filter(x => x.name == "outpatient")[0].userData);
    _row.datadoc.object4.opLimit = opLimit;

    var outpatientScope = _row.jsonValuesParse4.filter(x => x.name == "outpatientScope")[0].userData;
    _row.datadoc.object4.outpatientScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].jValues).filter(x => x.name == "outpatientScope")[0].values.filter(t => t.value == outpatientScope)[0].label;

    var matLimit = parseFloat(_row.jsonValuesParse4.filter(x => x.name == "maternity")[0].userData);
    _row.datadoc.object4.matLimit = matLimit;

    var maternityScope = _row.jsonValuesParse4.filter(x => x.name == "maternityScope")[0].values.filter(v => v.selected == true)[0].label;
    _row.datadoc.object4.maternityScope = maternityScope;

    var dentalLimit = parseFloat(_row.jsonValuesParse4.filter(x => x.name == "dental")[0].userData);
    _row.datadoc.object4.dentalLimit = dentalLimit;

    var dentalScope = _row.jsonValuesParse4.filter(x => x.name == "dentalScope")[0].userData;
    _row.datadoc.object4.dentalScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].jValues).filter(x => x.name == "dentalScope")[0].values.filter(t => t.value == dentalScope)[0].label;

    var opticalLimit = parseFloat(_row.jsonValuesParse4.filter(x => x.name == "optical")[0].userData);
    _row.datadoc.object4.opticalLimit = opticalLimit;

    var opticalScope = _row.jsonValuesParse4.filter(x => x.name == "opticalScope")[0].userData;
    _row.datadoc.object4.opticalScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].jValues).filter(x => x.name == "opticalScope")[0].values.filter(t => t.value == opticalScope)[0].label;

    doCmd({ "cmd": "GetTableRows", "data": { "table": "MedicalCorporateFUNERALTariff", "column": " TIPO TARIFICACION ", "filterValue": " TF ", "getColumn1": " TIPO TARIFICACION ", "getColumn2": ipLimit } });
    var lastExpenseLimit = parseFloat(GetTableRows.outData[0].column2);
    _row.datadoc.object4.lastExpenseLimit = lastExpenseLimit;

    /*Get Fields to print on Full Insurance Quotations*/
    _row.datadoc.object4.totalBasePremium = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].userData.totalBasePremium));

    _row.datadoc.object4.mds = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].userData.mds));

    _row.datadoc.object4.adminFee = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].userData.adminFee));

    _row.datadoc.object4.totalInsuranceSide = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].userData.totalInsuranceSide));

    /*Get Fields to print on Fund Management Quotations*/
    _row.datadoc.object4.estimatedFundSize = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].userData.totalBaseInsuranceSide));

    _row.datadoc.object4.fundAdminFee = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].userData.fundFee));

    _row.datadoc.object4.vat = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].userData.vat));

    _row.datadoc.object4.totalFundAmount = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].userData.totalFundAmount));

    /*Get Total Amount*/
    _row.datadoc.object4.formTotalPremium = _row.datadoc.object4.totalInsuranceSide + _row.datadoc.object4.totalFundAmount;

    /*var branch = _row.jsonValuesParse.filter(x => x.name == "branch")[0].values.filter(t => t.selected == true)[0].label;*/
    var branchId = _row.jsonValuesParse4.filter(x => x.name == "branch")[0].userData;

    /* Get branch name from BRANCH TABLE using the branchId caugth on the InsuredObject*/
    doCmd({ "cmd": "GetTable", "data": { "table": "PrimeBranchAndFranchiseList", "column": "S/N", "row": branchId.toString(), "getColumn": "Branch Name", "notFoundValue": null, "useCache": false } });

    var branch = GetTable.outData;

    var today = new Date();
    _row.datadoc.object4.branch = branch;
    _row.datadoc.object4.today = today;

    /*Additional Fields on Custom Form*/
    var copaymentId = parseFloat(_row.jsonValuesParse4.filter(x => x.name == "copayment")[0].userData);

    switch (copaymentId) {
        case 0:
            var copayment = "null";
            break;
        case 5:
            var copayment = "5% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 10:
            var copayment = "10% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 15:
            var copayment = "15% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 20:
            var copayment = "20% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 25:
            var copayment = "25% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
    }

    _row.datadoc.object4.copayment = copayment;

    var serviceProviderId = _row.jsonValuesParse4.filter(x => x.name == "territory")[0].userData;
    var serviceProvider = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].jValues).filter(x => x.name == "territory")[0].values.filter(t => t.value == serviceProviderId)[0].label;

    _row.datadoc.object4.serviceProviderSelect = serviceProvider;
    _row.datadoc.object4.territorial = serviceProvider;

    var channelId = _row.jsonValuesParse4.filter(x => x.name == "channel")[0].userData;
    var channel = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 9)[0].jValues).filter(x => x.name == "channel")[0].values.filter(t => t.value == channelId)[0].label;

    _row.datadoc.object4.channel = channel;

    var optionQuotePlan = _row.jsonValuesParse4.filter(x => x.name == "quotePlan")[0].userData[0];
    var quotePlan = _row.jsonValuesParse4.filter(x => x.name == "quotePlan")[0].values.filter(a => a.value == optionQuotePlan)[0].label
    _row.datadoc.object4.quotePlan = quotePlan;

    /*var datadocFullInsurance = [];
    var datadocFund = [];*/

    if (quotePlan == "Full Insurance") {
        datadocFullInsurance = _row.datadoc.object4;
    } else {
        datadocFund = _row.datadoc.object4;
        datadocFund.currency = _row.datadoc.currency
        _row.datadoc.object4.Fund = {
            "currency": _row.datadoc.currency,
            "estimatedFundSize": _row.datadoc.object4.estimatedFundSize,
            "fundAdminFee": _row.datadoc.object4.fundAdminFee,
            "vat": _row.datadoc.object4.vat,
            "totalFundAmount": _row.datadoc.object4.totalFundAmount,
            "formTotalPremium": _row.datadoc.object4.formTotalPremium
        }
    };
  _row.datadoc.totalPremiumAllObjects += _row.datadoc.object4.formTotalPremium;

    /*_row.datadoc.object4.Full = datadocFullInsurance;
    _row.datadoc.object4.Fund = datadocFund;*/

} // END OF IF ELSE FOR FOURTH QUOTATION OBJECT

// CONDITIONAL STRUCTURE FOR FIFTH QUOTATION OBJECT
if (_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10).length == 0) {
    //do nothing
    _row.datadoc.form5 = false
} else {
    _row.datadoc.form5 = true;
    _row.jsonValuesParse5 = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].jValues);

    _row.jsonValuesParse5;

    _row.datadoc.object5 = { "test": "test" };
    _row.datadoc.object5.Holder = _row.datadoc.Holder;
    _row.datadoc.object5.currency = _row.datadoc.currency;

    var staffNumber = parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m")[0].userData[0]) + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m1")[0].userData[0]) + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m2")[0].userData[0]) + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m3")[0].userData[0]) + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m4")[0].userData[0]) + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m5")[0].userData[0]) + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m6")[0].userData[0]) + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m7")[0].userData[0]) + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m8")[0].userData[0]) + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m9")[0].userData[0]) + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m10")[0].userData[0]);

    _row.datadoc.object5.staffNumber = staffNumber;

    var dependantNumber = parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m")[0].userData[0]) + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m1")[0].userData[0]) * 2 + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m2")[0].userData[0]) * 3 + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m3")[0].userData[0]) * 4 + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m4")[0].userData[0]) * 5 + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m5")[0].userData[0]) * 6 + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m6")[0].userData[0]) * 7 + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m7")[0].userData[0]) * 8 + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m8")[0].userData[0]) * 9 + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m9")[0].userData[0]) * 10 + parseFloat(_row.jsonValuesParse5.filter(x => x.name == "m10")[0].userData[0]) * 11 - staffNumber;

    _row.datadoc.object5.dependantNumber = dependantNumber;


    _row.datadoc.object5.planName = planName;

    var inpatientScope = _row.jsonValuesParse5.filter(x => x.name == "inpatientScope")[0].userData;
    _row.datadoc.object5.inpatientScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].jValues).filter(x => x.name == "inpatientScope")[0].values.filter(t => t.value == inpatientScope)[0].label;

    var ipLimit = parseFloat(_row.jsonValuesParse5.filter(x => x.name == "inpatient")[0].userData);
    var ip1Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse5.filter(x => x.name == "subCongenital")[0].userData[0]) / 100);
    var ip2Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse5.filter(x => x.name == "subOphtalmologic")[0].userData[0]) / 100);
    var ip3Limit = Math.round(ipLimit * parseFloat(_row.jsonValuesParse5.filter(x => x.name == "subDental")[0].userData[0]) / 100);

    _row.datadoc.object5.ipLimit = ipLimit;
    _row.datadoc.object5.ip1Limit = ip1Limit;
    _row.datadoc.object5.ip2Limit = ip2Limit;
    _row.datadoc.object5.ip3Limit = ip3Limit;

    var gradientChecked = _row.jsonValuesParse5.filter(x => x.name == "gradientCheck")[0].userData;

    _row.datadoc.object5.hasOutPatientGradient = gradientChecked != null && gradientChecked.find(x => x == "1") != null;
    _row.datadoc.object5.hasDentalGradient = gradientChecked != null && gradientChecked.find(x => x == "2") != null;
    _row.datadoc.object5.hasOpticalGradient = gradientChecked != null && gradientChecked.find(x => x == "3") != null;
    _row.datadoc.object5.outpatientScopeGradient = "";
    _row.datadoc.object5.opLimitGradient = "";
    _row.datadoc.object5.opMemberGradient = "";
    _row.datadoc.object5.dentalScopeGradient = "";
    _row.datadoc.object5.dentalLimitGradient = "";
    _row.datadoc.object5.dentalMemberGradient = "";
    _row.datadoc.object5.opticalScopeGradient = "";
    _row.datadoc.object5.opticalLimitGradient = "";
    _row.datadoc.object5.opticalMemberGradient = "";


    if (_row.datadoc.object5.hasOutPatientGradient) {
        var outpatientScopeG = _row.jsonValuesParse5.filter(x => x.name == "outpatientScopeG")[0].userData;
        var opLimitG = parseFloat(_row.jsonValuesParse5.filter(x => x.name == "outpatientG")[0].userData);
        _row.datadoc.object5.outpatientScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].jValues).filter(x => x.name == "outpatientScopeG")[0].values.filter(t => t.value == outpatientScopeG)[0].label;
        _row.datadoc.object5.opLimitGradient = opLimitG;
        _row.datadoc.object5.opMemberGradient = _row.jsonValuesParse5.filter(x => x.name == "outpatientGradient")[0].userData;
    }

    if (_row.datadoc.object5.hasDentalGradient) {
        var dentalScopeG = _row.jsonValuesParse5.filter(x => x.name == "dentalScopeG")[0].userData;
        var dentalLimitG = parseFloat(_row.jsonValuesParse5.filter(x => x.name == "dentalG")[0].userData);
        _row.datadoc.object5.dentalScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].jValues).filter(x => x.name == "dentalScopeG")[0].values.filter(t => t.value == dentalScopeG)[0].label;
        _row.datadoc.object5.dentalLimitGradient = dentalLimitG;
        _row.datadoc.object5.dentalMemberGradient = _row.jsonValuesParse5.filter(x => x.name == "dentalGradient")[0].userData;
    }

    if (_row.datadoc.object5.hasOpticalGradient) {
        var opticalScopeG = _row.jsonValuesParse5.filter(x => x.name == "opticalScopeG")[0].userData;
        var opticalLimitG = parseFloat(_row.jsonValuesParse5.filter(x => x.name == "opticalG")[0].userData);
        _row.datadoc.object5.opticalScopeGradient = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].jValues).filter(x => x.name == "opticalScopeG")[0].values.filter(t => t.value == opticalScopeG)[0].label;
        _row.datadoc.object5.opticalLimitGradient = opticalLimitG;
        _row.datadoc.object5.opticalMemberGradient = _row.jsonValuesParse5.filter(x => x.name == "opticalGradient")[0].userData;
    }

    var opLimit = parseFloat(_row.jsonValuesParse5.filter(x => x.name == "outpatient")[0].userData);
    _row.datadoc.object5.opLimit = opLimit;

    var outpatientScope = _row.jsonValuesParse5.filter(x => x.name == "outpatientScope")[0].userData;
    _row.datadoc.object5.outpatientScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].jValues).filter(x => x.name == "outpatientScope")[0].values.filter(t => t.value == outpatientScope)[0].label;

    var matLimit = parseFloat(_row.jsonValuesParse5.filter(x => x.name == "maternity")[0].userData);
    _row.datadoc.object5.matLimit = matLimit;

    var maternityScope = _row.jsonValuesParse5.filter(x => x.name == "maternityScope")[0].values.filter(v => v.selected == true)[0].label;
    _row.datadoc.object5.maternityScope = maternityScope;

    var dentalLimit = parseFloat(_row.jsonValuesParse5.filter(x => x.name == "dental")[0].userData);
    _row.datadoc.object5.dentalLimit = dentalLimit;

    var dentalScope = _row.jsonValuesParse5.filter(x => x.name == "dentalScope")[0].userData;
    _row.datadoc.object5.dentalScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].jValues).filter(x => x.name == "dentalScope")[0].values.filter(t => t.value == dentalScope)[0].label;

    var opticalLimit = parseFloat(_row.jsonValuesParse5.filter(x => x.name == "optical")[0].userData);
    _row.datadoc.object5.opticalLimit = opticalLimit;

    var opticalScope = _row.jsonValuesParse5.filter(x => x.name == "opticalScope")[0].userData;
    _row.datadoc.object5.opticalScope = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].jValues).filter(x => x.name == "opticalScope")[0].values.filter(t => t.value == opticalScope)[0].label;

    doCmd({ "cmd": "GetTableRows", "data": { "table": "MedicalCorporateFUNERALTariff", "column": " TIPO TARIFICACION ", "filterValue": " TF ", "getColumn1": " TIPO TARIFICACION ", "getColumn2": ipLimit } });
    var lastExpenseLimit = parseFloat(GetTableRows.outData[0].column2);
    _row.datadoc.object5.lastExpenseLimit = lastExpenseLimit;

    /*Get Fields to print on Full Insurance Quotations*/
    _row.datadoc.object5.totalBasePremium = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].userData.totalBasePremium));

    _row.datadoc.object5.mds = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].userData.mds));

    _row.datadoc.object5.adminFee = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].userData.adminFee));

    _row.datadoc.object5.totalInsuranceSide = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].userData.totalInsuranceSide));

    /*Get Fields to print on Fund Management Quotations*/
    _row.datadoc.object5.estimatedFundSize = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].userData.totalBaseInsuranceSide));

    _row.datadoc.object5.fundAdminFee = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].userData.fundFee));

    _row.datadoc.object5.vat = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].userData.vat));

    _row.datadoc.object5.totalFundAmount = Math.round(parseFloat(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].userData.totalFundAmount));

    /*Get Total Amount*/
    _row.datadoc.object5.formTotalPremium = _row.datadoc.object5.totalInsuranceSide + _row.datadoc.object5.totalFundAmount;

    /*var branch = _row.jsonValuesParse.filter(x => x.name == "branch")[0].values.filter(t => t.selected == true)[0].label;*/
    var branchId = _row.jsonValuesParse5.filter(x => x.name == "branch")[0].userData;

    /* Get branch name from BRANCH TABLE using the branchId caugth on the InsuredObject*/
    doCmd({ "cmd": "GetTable", "data": { "table": "PrimeBranchAndFranchiseList", "column": "S/N", "row": branchId.toString(), "getColumn": "Branch Name", "notFoundValue": null, "useCache": false } });

    var branch = GetTable.outData;

    var today = new Date();
    _row.datadoc.object5.branch = branch;
    _row.datadoc.object5.today = today;

    /*Additional Fields on Custom Form*/
    var copaymentId = parseFloat(_row.jsonValuesParse5.filter(x => x.name == "copayment")[0].userData);

    switch (copaymentId) {
        case 0:
            var copayment = "null";
            break;
        case 5:
            var copayment = "5% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 10:
            var copayment = "10% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 15:
            var copayment = "15% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 20:
            var copayment = "20% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
        case 25:
            var copayment = "25% on Outpatient Services and 100% No.Co-Pay on INPA&MATE";
            break;
    }

    _row.datadoc.object5.copayment = copayment;

    var serviceProviderId = _row.jsonValuesParse5.filter(x => x.name == "territory")[0].userData;
    var serviceProvider = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].jValues).filter(x => x.name == "territory")[0].values.filter(t => t.value == serviceProviderId)[0].label;

    _row.datadoc.object5.serviceProviderSelect = serviceProvider;
    _row.datadoc.object5.territorial = serviceProvider;

    var channelId = _row.jsonValuesParse5.filter(x => x.name == "channel")[0].userData;
    var channel = JSON.parse(_row.datadoc.InsuredObjects.filter(x => x.objectDefinitionId == 10)[0].jValues).filter(x => x.name == "channel")[0].values.filter(t => t.value == channelId)[0].label;

    _row.datadoc.object5.channel = channel;

    var optionQuotePlan = _row.jsonValuesParse5.filter(x => x.name == "quotePlan")[0].userData[0];
    var quotePlan = _row.jsonValuesParse5.filter(x => x.name == "quotePlan")[0].values.filter(a => a.value == optionQuotePlan)[0].label
    _row.datadoc.object5.quotePlan = quotePlan;

    /*var datadocFullInsurance = [];
    var datadocFund = [];*/

    if (quotePlan == "Full Insurance") {
        datadocFullInsurance = _row.datadoc.object5;
    } else {
        datadocFund = _row.datadoc.object5;
        datadocFund.currency = _row.datadoc.currency
        _row.datadoc.object5.Fund = {
            "currency": _row.datadoc.currency,
            "estimatedFundSize": _row.datadoc.object5.estimatedFundSize,
            "fundAdminFee": _row.datadoc.object5.fundAdminFee,
            "vat": _row.datadoc.object5.vat,
            "totalFundAmount": _row.datadoc.object5.totalFundAmount,
            "formTotalPremium": _row.datadoc.object5.formTotalPremium
        }
    };
	_row.datadoc.totalPremiumAllObjects += _row.datadoc.object5.formTotalPremium;
    /*_row.datadoc.object5.Full = datadocFullInsurance;
    _row.datadoc.object5.Fund = datadocFund;*/

} // END OF IF ELSE FOR FIFTH QUOTATION OBJECT

return _row.jsonValuesParse