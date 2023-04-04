import React from 'react'

function SearchBar() {
  return (
    <div className="p-20 flex gap-2">
        <div className='col input border rounded-lg transition-all duration-300 hover:border-amber-600'>
            <span className="input-icon mr-2">
                <i class="fa fa-search" aria-hidden="true"></i>
            </span>
            <input className='w-72 p-2 focus:outline-none bg-transparent' placeholder='Tên công việc, vị trí muốn ứng tuyển' type="text"/>
        </div>
        <div class="input-data search-select flex items-center border rounded-lg transition-all duration-300 hover:border-amber-600">
            <span class="ctn-icon"><i class="mx-2 text-amber-600 fa-solid fa-building"></i></span>
            <select id="category" class="form-control select2-hidden-accessible w-full" tabindex="-1" aria-hidden="true">
                <option value="">Tất cả ngành nghề</option>
                <option value="10001">Kinh doanh / Bán hàng</option>
                <option value="10003">Biên / Phiên dịch</option>
                <option value="10004">Báo chí / Truyền hình</option>
                <option value="10005">Bưu chính - Viễn thông</option>
                <option value="10006">Bảo hiểm</option>
                <option value="10007">Bất động sản</option>
                <option value="10008">Chứng khoán / Vàng / Ngoại tệ</option>
                <option value="10009">Công nghệ cao</option>
                <option value="10010">Cơ khí / Chế tạo / Tự động hóa</option>
                <option value="10011">Du lịch</option><option value="10012">Dầu khí/Hóa chất</option>
                <option value="10013">Dệt may / Da giày</option><option value="10014">Dịch vụ khách hàng</option>
                <option value="10015">Điện tử viễn thông</option>
                <option value="10016">Điện / Điện tử / Điện lạnh</option>
                <option value="10017">Giáo dục / Đào tạo</option>
                <option value="10018">Hoá học / Sinh học</option>
                <option value="10019">Hoạch định/Dự án</option>
                <option value="10020">Hàng gia dụng</option>
                <option value="10021">Hàng hải</option>
                <option value="10022">Hàng không</option>
                <option value="10023">Hành chính / Văn phòng</option>
                <option value="10024">In ấn / Xuất bản</option>
                <option value="10025">IT Phần cứng / Mạng</option>
                <option value="10026">IT phần mềm</option>
                <option value="10027">Khách sạn / Nhà hàng</option>
                <option value="10028">Kế toán / Kiểm toán</option>
                <option value="10029">Marketing / Truyền thông / Quảng cáo</option>
                <option value="10030">Môi trường / Xử lý chất thải</option>
                <option value="10031">Mỹ phẩm / Trang sức</option>
                <option value="10032">Mỹ thuật / Nghệ thuật / Điện ảnh</option>
                <option value="10033">Ngân hàng / Tài chính</option>
                <option value="10034">Nhân sự</option><option value="10035">Nông / Lâm / Ngư nghiệp</option>
                <option value="10036">Luật/Pháp lý</option>
                <option value="10037">Quản lý chất lượng (QA/QC)</option>
                <option value="10038">Quản lý điều hành</option>
                <option value="10039">Thiết kế đồ họa</option>
                <option value="10042">Thời trang</option>
                <option value="10043">Thực phẩm / Đồ uống</option>
                <option value="10045">Tư vấn</option>
                <option value="10046">Tổ chức sự kiện / Quà tặng</option>
                <option value="10047">Vận tải / Kho vận</option>
                <option value="10048">Logistics</option>
                <option value="10049">Xuất nhập khẩu</option>
                <option value="10050">Xây dựng</option>
                <option value="10051">Y tế / Dược</option>
                <option value="10052">Công nghệ Ô tô</option>
                <option value="10101">An toàn lao động</option>
                <option value="10102">Bán hàng kỹ thuật</option>
                <option value="10103">Bán lẻ / bán sỉ</option>
                <option value="10104">Bảo trì / Sữa chữa</option>
                <option value="10110">Dược phẩm / Công nghệ sinh học</option>
                <option value="10111">Địa chất / Khoáng sản</option>
                <option value="10113">Hàng cao cấp</option>
                <option value="10117">Hàng tiêu dùng</option>
                <option value="10120">Kiến trúc</option>
                <option value="10124">Phi chính phủ / Phi lợi nhuận</option>
                <option value="10125">Sản phẩm công nghiệp</option>
                <option value="10126">Sản xuất</option>
                <option value="10127">Tài chính / Đầu tư</option>
                <option value="10128">Thiết kế nội thất</option>
                <option value="10129">Thư ký / Trợ lý</option>
                <option value="10130">Spa / Làm đẹp</option>
                <option value="10131">Công nghệ thông tin</option>
                <option value="10132">NGO / Phi chính phủ / Phi lợi nhuận</option>
                <option value="11000">Ngành nghề khác</option>
            </select>
        </div>

        <div class="input-data search-select flex items-center border rounded-lg transition-all duration-300 hover:border-amber-600">
            <span class="ctn-icon"><i class="mx-2 text-amber-600 fa-solid fa-building"></i></span>
            <select id="category" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                <option value="">Tất cả lĩnh vực công ty</option>
                <option value="10001">Kinh doanh / Bán hàng</option>
                <option value="10003">Biên / Phiên dịch</option>
                <option value="10004">Báo chí / Truyền hình</option>
                <option value="10005">Bưu chính - Viễn thông</option>
                <option value="10006">Bảo hiểm</option>
                <option value="10007">Bất động sản</option>
                <option value="10008">Chứng khoán / Vàng / Ngoại tệ</option>
                <option value="10009">Công nghệ cao</option>
                <option value="10010">Cơ khí / Chế tạo / Tự động hóa</option>
                <option value="10011">Du lịch</option><option value="10012">Dầu khí/Hóa chất</option>
                <option value="10013">Dệt may / Da giày</option><option value="10014">Dịch vụ khách hàng</option>
                <option value="10015">Điện tử viễn thông</option>
                <option value="10016">Điện / Điện tử / Điện lạnh</option>
                <option value="10017">Giáo dục / Đào tạo</option>
                <option value="10018">Hoá học / Sinh học</option>
                <option value="10019">Hoạch định/Dự án</option>
                <option value="10020">Hàng gia dụng</option>
                <option value="10021">Hàng hải</option>
                <option value="10022">Hàng không</option>
                <option value="10023">Hành chính / Văn phòng</option>
                <option value="10024">In ấn / Xuất bản</option>
                <option value="10025">IT Phần cứng / Mạng</option>
                <option value="10026">IT phần mềm</option>
                <option value="10027">Khách sạn / Nhà hàng</option>
                <option value="10028">Kế toán / Kiểm toán</option>
                <option value="10029">Marketing / Truyền thông / Quảng cáo</option>
                <option value="10030">Môi trường / Xử lý chất thải</option>
                <option value="10031">Mỹ phẩm / Trang sức</option>
                <option value="10032">Mỹ thuật / Nghệ thuật / Điện ảnh</option>
                <option value="10033">Ngân hàng / Tài chính</option>
                <option value="10034">Nhân sự</option><option value="10035">Nông / Lâm / Ngư nghiệp</option>
                <option value="10036">Luật/Pháp lý</option>
                <option value="10037">Quản lý chất lượng (QA/QC)</option>
                <option value="10038">Quản lý điều hành</option>
                <option value="10039">Thiết kế đồ họa</option>
                <option value="10042">Thời trang</option>
                <option value="10043">Thực phẩm / Đồ uống</option>
                <option value="10045">Tư vấn</option>
                <option value="10046">Tổ chức sự kiện / Quà tặng</option>
                <option value="10047">Vận tải / Kho vận</option>
                <option value="10048">Logistics</option>
                <option value="10049">Xuất nhập khẩu</option>
                <option value="10050">Xây dựng</option>
                <option value="10051">Y tế / Dược</option>
                <option value="10052">Công nghệ Ô tô</option>
                <option value="10101">An toàn lao động</option>
                <option value="10102">Bán hàng kỹ thuật</option>
                <option value="10103">Bán lẻ / bán sỉ</option>
                <option value="10104">Bảo trì / Sữa chữa</option>
                <option value="10110">Dược phẩm / Công nghệ sinh học</option>
                <option value="10111">Địa chất / Khoáng sản</option>
                <option value="10113">Hàng cao cấp</option>
                <option value="10117">Hàng tiêu dùng</option>
                <option value="10120">Kiến trúc</option>
                <option value="10124">Phi chính phủ / Phi lợi nhuận</option>
                <option value="10125">Sản phẩm công nghiệp</option>
                <option value="10126">Sản xuất</option>
                <option value="10127">Tài chính / Đầu tư</option>
                <option value="10128">Thiết kế nội thất</option>
                <option value="10129">Thư ký / Trợ lý</option>
                <option value="10130">Spa / Làm đẹp</option>
                <option value="10131">Công nghệ thông tin</option>
                <option value="10132">NGO / Phi chính phủ / Phi lợi nhuận</option>
                <option value="11000">Ngành nghề khác</option>
            </select>
         
        </div>

        <div class="input-data search-select flex items-center border rounded-lg transition-all duration-300 hover:border-amber-600">
            <span class="ctn-icon"><i class="mx-2 text-amber-600 fa-solid fa-location"></i></span>
            <select id="category" class="form-control select2-hidden-accessible" tabindex="-1" aria-hidden="true">
                <option value="">Tất cả vị trí</option>
                <option value="10001">Đà Lạt</option>
                <option value="10003">TP. Hồ Chí Minh</option>
                <option value="10004">Báo chí / Truyền hình</option>
                <option value="10005">Bưu chính - Viễn thông</option>
                <option value="10006">Bảo hiểm</option>
                <option value="10007">Bất động sản</option>
                <option value="10008">Chứng khoán / Vàng / Ngoại tệ</option>
                <option value="10009">Công nghệ cao</option>
                <option value="10010">Cơ khí / Chế tạo / Tự động hóa</option>
                <option value="10011">Du lịch</option><option value="10012">Dầu khí/Hóa chất</option>
                <option value="10013">Dệt may / Da giày</option><option value="10014">Dịch vụ khách hàng</option>
                <option value="10015">Điện tử viễn thông</option>
                <option value="10016">Điện / Điện tử / Điện lạnh</option>
                <option value="10017">Giáo dục / Đào tạo</option>
                <option value="10018">Hoá học / Sinh học</option>
                <option value="10019">Hoạch định/Dự án</option>
                <option value="10020">Hàng gia dụng</option>
                <option value="10021">Hàng hải</option>
                <option value="10022">Hàng không</option>
                <option value="10023">Hành chính / Văn phòng</option>
                <option value="10024">In ấn / Xuất bản</option>
                <option value="10025">IT Phần cứng / Mạng</option>
                <option value="10026">IT phần mềm</option>
                <option value="10027">Khách sạn / Nhà hàng</option>
                <option value="10028">Kế toán / Kiểm toán</option>
                <option value="10029">Marketing / Truyền thông / Quảng cáo</option>
                <option value="10030">Môi trường / Xử lý chất thải</option>
                <option value="10031">Mỹ phẩm / Trang sức</option>
                <option value="10032">Mỹ thuật / Nghệ thuật / Điện ảnh</option>
                <option value="10033">Ngân hàng / Tài chính</option>
                <option value="10034">Nhân sự</option><option value="10035">Nông / Lâm / Ngư nghiệp</option>
                <option value="10036">Luật/Pháp lý</option>
                <option value="10037">Quản lý chất lượng (QA/QC)</option>
                <option value="10038">Quản lý điều hành</option>
                <option value="10039">Thiết kế đồ họa</option>
                <option value="10042">Thời trang</option>
                <option value="10043">Thực phẩm / Đồ uống</option>
                <option value="10045">Tư vấn</option>
                <option value="10046">Tổ chức sự kiện / Quà tặng</option>
                <option value="10047">Vận tải / Kho vận</option>
                <option value="10048">Logistics</option>
                <option value="10049">Xuất nhập khẩu</option>
                <option value="10050">Xây dựng</option>
                <option value="10051">Y tế / Dược</option>
                <option value="10052">Công nghệ Ô tô</option>
                <option value="10101">An toàn lao động</option>
                <option value="10102">Bán hàng kỹ thuật</option>
                <option value="10103">Bán lẻ / bán sỉ</option>
                <option value="10104">Bảo trì / Sữa chữa</option>
                <option value="10110">Dược phẩm / Công nghệ sinh học</option>
                <option value="10111">Địa chất / Khoáng sản</option>
                <option value="10113">Hàng cao cấp</option>
                <option value="10117">Hàng tiêu dùng</option>
                <option value="10120">Kiến trúc</option>
                <option value="10124">Phi chính phủ / Phi lợi nhuận</option>
                <option value="10125">Sản phẩm công nghiệp</option>
                <option value="10126">Sản xuất</option>
                <option value="10127">Tài chính / Đầu tư</option>
                <option value="10128">Thiết kế nội thất</option>
                <option value="10129">Thư ký / Trợ lý</option>
                <option value="10130">Spa / Làm đẹp</option>
                <option value="10131">Công nghệ thông tin</option>
                <option value="10132">NGO / Phi chính phủ / Phi lợi nhuận</option>
                <option value="11000">Ngành nghề khác</option>
            </select>
         
        </div>
      
    </div>
    
  )
}

export default SearchBar