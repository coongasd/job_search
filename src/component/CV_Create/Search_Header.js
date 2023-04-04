function Search_Header() {
    return(
        <div className="search_header">
            <form action="#">
                <input class="search_item" placeholder="Tên công việc, vị trí bạn muốn ứng tuyển ..."></input>
                <select
                id="vlance_jobbundle_jobtype_category"
                name="vlance_jobbundle_jobtype[category]"
                required="required"
                placeholder="Chọn lĩnh vực phù hợp"
                data-toggle="popover"
                data-placement="top"
                data-content="Chọn lĩnh vực phù hợp"
                data-trigger="hover"
                class="search_item"
              >
                <option disabled="disabled" selected="selected">
                  - Tất cả ngành nghề -
                </option>{" "}
                <optgroup label="IT và lập trình">
                  <option value="2">Lập trình web</option>
                  <option value="3">Ứng dụng di động</option>
                  <option value="8">Việc lập trình khác</option>
                  <option value="9">Lập trình phần mềm</option>
                  <option value="10">Tối ưu cho công cụ tìm kiếm - SEO</option>
                  <option value="11">Tư vấn, thiết kế hệ thống mạng</option>
                  <option value="40">QA Tester</option>
                  <option value="42">Quản lý dự án</option>
                  <option value="71">Lập trình nhúng</option>
                  <option value="72">
                    AI - Trí tuệ nhân tạo, Machine Learning
                  </option>{" "}
                </optgroup>
                <optgroup label="Marketing &amp; Bán hàng">
                  <option value="26">Quảng cáo google adwords – SEM</option>
                  <option value="27">Cộng tác viên bán hàng</option>
                  <option value="28">
                    Tư vấn bán hàng &amp; Giới thiệu sản phẩm
                  </option>
                  <option value="29">
                    Nghiên cứu &amp; khảo sát thị trường
                  </option>
                  <option value="30">Việc KD và marketing khác</option>
                  <option value="33">Tổ chức sự kiện</option>
                  <option value="50">
                    Tư vấn, lập kế hoạch &amp; triển khai marketing online
                  </option>
                  <option value="51">Quảng cáo facebook</option>
                  <option value="52">Email marketing</option>
                  <option value="53">Forum seeding</option>
                  <option value="83">Tiếp thị liên kết</option>{" "}
                </optgroup>
                <optgroup label="Lĩnh vực khác">
                  <option value="38">Chụp ảnh</option>
                  <option value="39">Tuyển dụng</option>{" "}
                </optgroup>
                <optgroup label="Thiết kế">
                  <option value="7">Thiết kế Logo</option>
                  <option value="13">Thiết kế đồ họa</option>
                  <option value="14">Thiết kế giao diện Website</option>
                  <option value="15">Banner quảng cáo</option>
                  <option value="16">Nhãn hiệu và bao bì</option>
                  <option value="17">Làm video clip</option>
                  <option value="18">Ảnh và chỉnh sửa ảnh</option>
                  <option value="20">Các việc thiết kế khác</option>
                  <option value="43">Thiết kế bộ nhận diện thương hiệu</option>
                  <option value="44">Thiết kế flash &amp; HTML5</option>
                  <option value="45">
                    Thiết kế giao diện ứng dụng di động
                  </option>
                  <option value="46">Thiết kế brochure</option>
                  <option value="47">Thiết kế infographic</option>{" "}
                </optgroup>
                <optgroup label="Kế toán, Thuế &amp; Luật">
                  <option value="34">Kế toán</option>
                  <option value="35">Tư vấn luật</option>
                  <option value="59">Hồ sơ pháp lý</option>{" "}
                </optgroup>
                <optgroup label="Viết lách &amp; dịch thuật">
                  <option value="6">Viết báo &amp; tạp chí</option>
                  <option value="21">Quản lý blog &amp; fanpage</option>
                  <option value="22">Dịch thuật</option>
                  <option value="23">Viết sách</option>
                  <option value="24">
                    Viết bài PR &amp; quảng cáo sáng tạo
                  </option>
                  <option value="48">Copywriting</option>
                  <option value="49">Viết bài SEO, nội dung cho website</option>
                  <option value="61">Biên tập &amp; chỉnh sửa nội dung</option>
                  <option value="73">
                    Viết bài review đánh giá sản phẩm
                  </option>{" "}
                </optgroup>
                <optgroup label="Kiến trúc và xây dựng">
                  <option value="19">Thiết kế nội thất nhà và chung cư</option>
                  <option value="64">Thiết kế ngoại thất</option>
                  <option value="65">Thiết kế xây dựng nhà</option>
                  <option value="66">Dựng phối cảnh 3D</option>{" "}
                </optgroup>
                <optgroup label="Video">
                  <option value="68">Video hoạt hình</option>
                  <option value="69">TVC giới thiệu sản phẩm, công ty</option>
                  <option value="70">Video review</option>{" "}
                </optgroup>
                <optgroup label="Đào tạo &amp; Khoá học">
                  <option value="76">Ngoại ngữ</option>
                  <option value="77">Đào tạo kỹ năng mềm</option>
                  <option value="78">Gia sư</option>{" "}
                </optgroup>
                <optgroup label="Tư vấn doanh nghiệp &amp; Coaching">
                  <option value="80">Cải tiến quy trình doanh nghiệp</option>
                  <option value="81">Tư vấn chiến lược kinh doanh</option>
                  <option value="82">Coaching</option>{" "}
                </optgroup>
                </select>
                <select
                id="vlance_jobbundle_jobtype_category"
                name="vlance_jobbundle_jobtype[category]"
                required="required"
                placeholder="Chọn lĩnh vực phù hợp"
                data-toggle="popover"
                data-placement="top"
                data-content="Chọn lĩnh vực phù hợp"
                data-trigger="hover"
                class="search_item"
              >
                <option disabled="disabled" selected="selected">
                  - Tất địa điểm -
                </option>{" "}
                <option value="1">Hà Nội</option>
                <option value="2">Hồ Chí Minh</option>
                <option value="3">Bình Dương</option>
                <option value="4">Bắc Ninh</option>
                <option value="5">Đồng Nai</option>
                <option value="6">Hưng Yên</option>
                <option value="7">Hải Dương</option>
                <option value="8">Đà Nẵng</option>
                <option value="9">Hải Phòng</option>
                <option value="10">An Giang</option>
                <option value="11">Bà Rịa-Vũng Tàu</option>
                <option value="12">Bắc Giang</option>
                <option value="13">Bắc Kạn</option>
                <option value="14">Bạc Liêu</option>
                <option value="15">Bến Tre</option>
                <option value="16">Bình Định</option>
                <option value="17">Bình Phước</option>
                <option value="18">Bình Thuận</option>
                <option value="19">Cà Mau</option>
                <option value="20">Cần Thơ</option>
                <option value="21">Cao Bằng</option>
                <option value="22">Cửu Long</option>
                <option value="23">Đắk Lắk</option>
                <option value="24">Đắc Nông</option>
                <option value="25">Điện Biên</option>
                <option value="26">Đồng Tháp</option>
                <option value="27">Gia Lai</option>
                <option value="28">Hà Giang</option>
                <option value="29">Hà Nam</option>
                <option value="30">Hà Tĩnh</option>
                <option value="31">Hậu Giang</option>
                <option value="32">Hoà Bình</option>
                <option value="33">Khánh Hoà</option>
                <option value="34">Kiên Giang</option>
                <option value="35">Kon Tum</option>
                <option value="36">Lai Châu</option>
                <option value="37">Lâm Đồng</option>
                <option value="38">Lạng Sơn</option>
                <option value="39">Lào Cai</option>
                <option value="40">Long An</option>
                <option value="41">Miền Bắc</option>
                <option value="42">Miền Nam</option>
                <option value="43">Miền Trung</option>
                <option value="44">Nam Định</option>
                <option value="45">Nghệ An</option>
                <option value="46">Ninh Bình</option>
                <option value="47">Ninh Thuận</option>
                <option value="48">Phú Thọ</option>
                <option value="49">Phú Yên</option>
                <option value="50">Quảng Bình</option>
                <option value="51">Quảng Nam</option>
                <option value="52">Quảng Ngãi</option>
                <option value="53">Quảng Ninh</option>
                <option value="54">Quảng Trị</option>
                <option value="55">Sóc Trăng</option>
                <option value="56">Sơn La</option>
                <option value="57">Tây Ninh</option>
                <option value="58">Thái Bình</option>
                <option value="59">Thái Nguyên</option>
                <option value="60">Thanh Hoá</option>
                <option value="61">Thừa Thiên Huế</option>
                <option value="62">Tiền Giang</option>
                <option value="63">Toàn Quốc</option>
                <option value="64">Trà Vinh</option>
                <option value="65">Tuyên Quang</option>
                <option value="66">Vĩnh Long</option>
                <option value="67">Vĩnh Phúc</option>
                <option value="68">Yên Bái</option>
                <option value="100">Nước Ngoài</option>
                    
                </select>
                
                <button>Tìm Kiếm</button>
            </form>
        </div>
    );
}

export default Search_Header;