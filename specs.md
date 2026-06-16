Đây là dự án youtube mini với một vài chức năng chính sau

Nhiệm vụ 1: Tìm kiếm video
Mục tiêu: Người dùng tìm được video phù hợp với nhu cầu thông qua việc nhập từ khóa và lọc kết quả trả về.

Đầu vào: Từ khóa tìm kiếm do người dùng nhập vào. Các tham số lọc bổ sung như thời lượng, ngày đăng nếu người dùng chọn áp dụng.

Tiền điều kiện: Người dùng đang ở bất kỳ trang nào trong hệ thống có ô tìm kiếm và có thể nhìn thấy thanh tìm kiếm. Không yêu cầu đăng nhập.

Hậu điều kiện: Hệ thống hiển thị danh sách kết quả video phù hợp với từ khóa đã chọn. Người dùng chọn được một video để xem, hoặc điều chỉnh lại từ khóa nếu kết quả không phù hợp.

Phân rã nhiệm vụ theo HTA:
0. Tìm kiếm video
   1. Truy cập thanh tìm kiếm
      1.1. Nhấn vào ô tìm kiếm
      1.2. [Luồng phụ] Hệ thống hiển thị từ khóa tìm kiếm gần đây của người dùng
   2. Nhập từ khóa
      2.1. Gõ từ khóa vào ô tìm kiếm
      2.2. Hệ thống hiển thị gợi ý tự động theo từng ký tự
      2.3. Chọn một gợi ý hoặc tiếp tục nhập từ khóa riêng
      2.4. [Ngoại lệ] Người dùng xóa hết từ khóa → Ô tìm kiếm trở về trạng thái rỗng, danh 	sách gợi ý ẩn đi
   3. Thực hiện tìm kiếm
      3.1. Nhấn Enter hoặc nhấn nút tìm kiếm
      3.2. Hệ thống trả về danh sách kết quả
      3.3. [Ngoại lệ] Không có kết quả nào khớp → Hiển thị thông báo không tìm thấy kết 	quả
      3.4. [Ngoại lệ] Mất kết nối trong lúc tìm kiếm → Hiển thị thông báo lỗi và nút thử lại
   4. Lọc và sắp xếp kết quả (không bắt buộc)
      4.1. Lọc theo danh mục nội dung
      4.2. Lọc theo thời lượng video
      4.3. Sắp xếp theo ngày đăng hoặc lượt xem
      4.4. [Luồng phụ] Xóa bộ lọc để quay về kết quả gốc
   5. Duyệt qua kết quả
      5.1. Xem thumbnail, tiêu đề, tên kênh, số lượt xem và thời gian đăng
      5.2. [Luồng phụ] Cuộn trang để xem thêm kết quả
   6. Chọn video để xem
   
   7. [Luồng phụ] Điều chỉnh lại từ khóa nếu kết quả không phù hợp
      7.1. Xóa hoặc sửa từ khóa trong ô tìm kiếm
      7.2. Thực hiện lại từ bước 3

3.3. Nhiệm vụ 2: Khám phá đề xuất video
Mục tiêu: Người dùng tìm được video muốn xem thông qua việc lướt xem nội dung được hệ thống đề xuất trên trang chủ mà không cần nhập từ khóa cụ thể.

Đầu vào: Người dùng truy cập trang chủ. Nếu đã đăng nhập, hệ thống sử dụng lịch sử xem và kênh đã theo dõi để cá nhân hóa danh sách đề xuất. Nếu chưa đăng nhập, hệ thống hiển thị nội dung phổ biến theo xu hướng chung.

Tiền điều kiện: Người dùng có truy cập Internet và đang ở trang chủ của hệ thống. Không yêu cầu đăng nhập.

Hậu điều kiện: Người dùng chọn được một video để xem, hoặc chuyển sang sử dụng tính năng tìm kiếm nếu không tìm thấy nội dung phù hợp qua đề xuất.

Phân rã nhiệm vụ theo HTA:
0. Khám phá nội dung được đề xuất
   1. Truy cập trang chủ
      1.1. Hệ thống tải và hiển thị danh sách video đề xuất
      1.2. [Ngoại lệ] Hệ thống không tải được nội dung → Hiển thị thông báo lỗi và nút thử 	lại
   2. Duyệt qua danh sách video được đề xuất
      2.1. Xem thumbnail, tiêu đề video, tên kênh và số lượt xem
      2.2. Cuộn trang để xem thêm video
      2.3. [Luồng phụ] Tải thêm nội dung khi cuộn đến cuối trang
   3. Chọn video để xem
   4. [Luồng phụ] Chuyển sang tìm kiếm nếu không tìm được video phù hợp sau một thời gian lướt

3.4. Nhiệm vụ 3: Theo dõi kênh
Mục tiêu: Người dùng đăng ký theo dõi một kênh để nhận cập nhật khi kênh đó đăng video mới, hoặc hủy theo dõi kênh không còn quan tâm.

Đầu vào: Trạng thái theo dõi của người dùng đối với một kênh (Chưa theo dõi/ Đã theo dõi).

Tiền điều kiện: Người dùng đã đăng nhập vào hệ thống. Nếu chưa đăng nhập, hệ thống điều hướng đến trang đăng nhập khi người dùng nhấn nút Theo dõi.

Hậu điều kiện:
1. Nếu theo dõi thành công: kênh được thêm vào danh sách đang theo dõi, nút chuyển sang trạng thái Đang theo dõi, số người theo dõi trên trang kênh tăng lên 1. Video mới từ kênh sẽ xuất hiện trong luồng nội dung đề xuất của người dùng.
2. Nếu hủy theo dõi thành công: kênh bị xóa khỏi danh sách đang theo dõi, nút chuyển về trạng thái Theo dõi, số người theo dõi giảm đi 1.

Phân rã nhiệm vụ theo HTA:
0. Theo dõi / Hủy theo dõi kênh
   1. Tìm kiếm nút theo dõi
      1.1. Tìm thấy nút Theo dõi
      1.2. Nhấn nút Theo dõi hoặc Hủy theo dõi
   2. Xử lý hành động
      2.1. [Ngoại lệ] Người dùng chưa đăng nhập → Điều hướng đến trang đăng nhập, sau 	khi đăng nhập quay lại thực hiện hành động ban đầu
      2.2. Hệ thống xử lý và xác nhận thành công
      2.3. Giao diện cập nhật trạng thái nút tức thì
      2.4. Số người theo dõi trên trang kênh cập nhật
      2.5. [Ngoại lệ] Lỗi kết nối trong lúc thực hiện → Hiển thị thông báo lỗi, trạng thái nút 	giữ nguyên, người dùng có thể thử lại

3.5. Nhiệm vụ 4: Xem kênh
Mục tiêu: Người dùng truy cập trang kênh của một người tạo nội dung để xem toàn bộ video đã đăng, các danh sách phát đã đăng, đọc thông tin kênh hoặc quyết định có theo dõi kênh đó không.

Đầu vào: Khi người dùng nhấn vào thì cần hiển thị các thông tin về kênh: Tên kênh, biểu tượng của kênh, số người đăng ký của kênh, số video của kênh, mô tả của kênh, trạng thái theo dõi của người dùng với kênh đang xem, các video và các danh sách phát.

Tiền điều kiện: Người dùng đang ở trang xem video, trang kết quả tìm kiếm, hoặc danh sách kênh đang theo dõi. Không yêu cầu đăng nhập.

Hậu điều kiện: Người dùng có thể chọn xem một video từ kênh, theo dõi kênh, hoặc quay lại trang trước mà không thực hiện hành động nào.

Phân rã nhiệm vụ theo HTA:
0. Xem kênh
   1. Truy cập trang kênh
      1.1. Hệ thống tải và hiển thị trang tổng quan kênh
      1.2. [Ngoại lệ] Kênh không tồn tại hoặc đã bị xóa → Hiển thị thông báo và điều hướng 	về trang trước
   2. [Luồng phụ] Đọc thông tin tổng quan kênh (Xem tên kênh, ảnh đại diện, số người theo dõi, tổng số video và mô tả kênh) (Không bắt buộc)
   3. [Luồng phụ] Duyệt video của kênh
      3.1. Xem danh sách video theo thứ tự mặc định (thường là mới nhất trước)
      3.2. [Luồng phụ] Tải thêm video khi cuộn đến cuối
      3.4. Chọn video để xem
      3.5. [Ngoại lệ] Kênh chưa có video nào → Hiển thị thông báo kênh chưa đăng tải nội 	dung
   4. Theo dõi kênh (không bắt buộc) → Xem Nhiệm vụ 3

3.6. Nhiệm vụ 5: Tương tác video
Mục tiêu: Cho phép người dùng không chỉ tiêu thụ nội dung một cách thụ động mà còn tham gia vào quá trình phản hồi, đánh giá và lưu trữ nội dung có giá trị - từ đó tạo ra vòng lặp tương tác giữa người xem với nội dung và với cộng đồng xung quanh nội dung đó.

Mô hình tư duy: Khi người dùng xem một video, hành vi của họ không dừng lại ở việc nhìn và nghe. Nghiên cứu hành vi người dùng trên các nền tảng video lớn YouTube cho thấy người xem thường trải qua một chuỗi phản ứng tâm lý theo thứ tự: cảm nhận → phán xét → muốn lưu lại hoặc chia sẻ phản ứng đó. 
Cụ thể:
1. Khi nội dung gây ra cảm xúc (thích, ngạc nhiên, không đồng ý), người dùng muốn thể hiện phản ứng ngay lập tức → dẫn đến nhu cầu thả cảm xúc.
2. Khi nội dung kích thích suy nghĩ hoặc muốn trao đổi, người dùng muốn để lại dấu vết bằng ngôn ngữ → dẫn đến nhu cầu bình luận và trả lời bình luận.
3. Khi nội dung có giá trị lâu dài (hướng dẫn, tư liệu, giải trí yêu thích), người dùng muốn giữ lại để dùng sau → dẫn đến nhu cầu lưu video.
4. Khi bình luận đã đăng cần chỉnh sửa hoặc không còn phù hợp, người dùng cần quyền kiểm soát nội dung của chính mình → dẫn đến nhu cầu sửa và xóa bình luận.
Mô hình tư duy ở đây là: "Video là không gian công cộng, và tôi - với tư cách người xem - vừa là khán giả, vừa là người tham gia." Người dùng kỳ vọng có thể tương tác với nội dung theo nhiều tầng (cảm xúc, ngôn ngữ, hành động lưu trữ) mà không bị gián đoạn khỏi luồng xem.

Các nhiệm vụ con:
1. Xem video
2. Thả cảm xúc video
3. Bình luận video
4. Trả lời bình luận
5. Sửa bình luận
6. Xóa bình luận
7. Lưu video

Nhiệm vụ con 5.1: Xem video
Mục tiêu: Người dùng xem một video từ đầu đến cuối hoặc đến một điểm nhất định, cùng với các thông tin liên quan và nội dung đề xuất xung quanh.

Đầu vào: Định danh video (ID hoặc URL), tiêu đề video, tên kênh, số người đăng ký kênh, biểu tượng kênh, mô tả video (lượt xem, ngày đăng, mô tả do kênh viết) được truyền vào. Thông tin người dùng (nếu đã đăng nhập) để cá nhân hóa video đề xuất bên cạnh.

Tiền điều kiện: Người dùng đã chọn một video từ bất kỳ điểm nào trong hệ thống. Không yêu cầu đăng nhập để xem.

Hậu điều kiện: Video được ghi vào lịch sử xem của người dùng (nếu đã đăng nhập). Hệ thống cập nhật lượt xem của video. Thuật toán đề xuất cập nhật để phản ánh sở thích người dùng dựa trên video vừa xem.


Phân rã nhiệm vụ theo HTA:
0. Xem video
   1. Truy cập trang xem video
      1.1. Hệ thống tải trang và bắt đầu phát video tự động
      1.2. [Ngoại lệ] Video không khả dụng hoặc bị xóa → Hiển thị thông báo và gợi ý 	video liên quan
      1.3. [Ngoại lệ] Kết nối mạng yếu, video không tải được → Hiển thị thông báo đang 	tải, thử lại tự động
   2. [Luồng phụ] Điều khiển phát lại
      2.1. Tạm dừng / tiếp tục phát
      2.2. Tua đến vị trí mong muốn trên thanh tiến trình
      2.3. Điều chỉnh âm lượng
      2.4. Chuyển sang chế độ toàn màn hình
      2.5. Điều chỉnh chất lượng video
      2.6. Điều chỉnh tốc độ phát video
   3. Đọc thông tin video (Xem tiêu đề và mô tả đầy đủ, thông tin kênh, số người theo dõi, số lượt xem và ngày đăng) (không bắt buộc)
   4. Xem video liên quan (không bắt buộc)
      4.1. Duyệt danh sách video đề xuất bên cạnh
      4.2. Chọn video tiếp theo để xem
   5. Tương tác với video (không bắt buộc) → Xem các nhiệm vụ con 5.2 → 5.7

Kế hoạch:
Kế hoạch 0: thực hiện 1 → 2 trong suốt quá trình xem.
            Thực hiện 3 khi muốn tìm hiểu thêm về video.
            Thực hiện 4 khi muốn tiếp tục xem nội dung liên quan.
	 Thực hiện 5 khi muốn tham gia hoạt động tương tác video (thả cảm xúc, bình luận)
Kế hoạch 2: các bước 2.1 đến 2.6 độc lập nhau, thực hiện tùy theo nhu cầu tại từng thời điểm.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng: Đây là nhiệm vụ cốt lõi và có tần suất cao nhất trong toàn bộ hệ thống - mọi luồng sử dụng khác đều dẫn đến nhiệm vụ này. Theo Statista, người dùng YouTube tạo ra hơn 3,5 tỷ lượt thích mỗi ngày và 100 triệu bình luận mỗi ngày trong năm 2024, phản ánh khối lượng khổng lồ của các phiên xem video diễn ra liên tục.
Về ràng buộc thời gian: Đây là nhiệm vụ có yêu cầu về hiệu năng cao nhất trong hệ thống. Video phải bắt đầu phát trong vòng 2–3 giây sau khi người dùng chọn. Theo AMWDemandSage, 53% người dùng di động sẽ rời bỏ trang nếu thời gian tải vượt quá 3 giây, và xác suất người dùng rời trang tăng 32% khi thời gian tải tăng từ 1 lên 3 giây. Thanh tiến trình cần phản hồi ngay lập tức khi người dùng tua để không gây cảm giác hệ thống bị treo.
Về mô hình tư duy người dùng: Người dùng hình dung trang xem video như một "rạp chiếu" cá nhân - video là trung tâm, mọi thứ khác là phụ trợ. Họ kỳ vọng trình phát video chiếm diện tích lớn nhất trang, các nút điều khiển quen thuộc và nằm đúng vị trí mong đợi. Thông tin mô tả và video liên quan được đặt phía dưới hoặc bên cạnh, không lấn át nội dung chính.


Nhiệm vụ con 5.2: Bình luận video
Mục tiêu:
Chức năng Bình luận video cho phép người dùng bày tỏ ý kiến, cảm nhận hoặc tương tác với nội dung video thông qua việc viết và đăng bình luận. Đây là hành động tương tác cơ bản và phổ biến nhất trên nền tảng, giúp tạo ra cộng đồng thảo luận xung quanh mỗi video. Bình luận được hiển thị công khai ngay lập tức sau khi đăng, giúp người xem khác có thể đọc và tương tác.

Đầu vào:
Nội dung bình luận (văn bản) do người dùng nhập bình luận.

Tiền điều kiện:
Người dùng đã đăng nhập hệ thống và đang xem một video hợp lệ.

Hậu điều kiện:
Bình luận được lưu vào hệ thống và hiển thị ngay lập tức trong danh sách bình luận của video. Thông báo đăng bình luận thành công được hiển thị.

Phân rã nhiệm vụ theo HTA:
0.   Bình luận video
1. Truy cập phần nhập bình luận.
   2.1. Người dùng tìm kiếm phần bình luận.
   2.2. Nhấn vào kích hoạt “Thêm bình luận”.
2. Nhập nội dung bình luận.
3. Xác nhận đăng bình luận.
   3.1. Đăng bình luận.
   3.2. [Ngoại lệ] Hủy đăng bình luận.
4. Hệ thống lưu và hiển thị bình luận trong danh sách.

Kế hoạch:
Kế hoạch 0: Thực hiện theo trình tự: 1 → 2 → 3 → 4 để đạt mục tiêu hoặc 1→ 2 → 3 nếu không muốn đăng bình luận.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng:
Đây là chức năng được sử dụng rất thường xuyên, là hành động tương tác phổ biến nhất trên nền tảng, xảy ra trong hầu hết các phiên xem video.
Về ràng buộc thời gian:
Bình luận cần được lưu và hiển thị ngay lập tức trong vòng dưới 2 giây sau khi người dùng nhấn "Đăng", tạo cảm giác phản hồi tức thì.
Về mô hình tư duy người dùng: Người dùng xem phần bình luận như một "quảng trường công cộng" gắn liền với video - nơi họ vừa là khán giả, vừa là người phát biểu. Khi nhấn vào ô bình luận, họ đang thực hiện một hành động chuyển vai: từ người xem thụ động sang người tham gia chủ động. Họ kỳ vọng ô nhập xuất hiện ngay, nút "Đăng" chỉ sáng lên khi có nội dung, và bình luận của mình xuất hiện ngay lập tức trong danh sách sau khi gửi - không cần tải lại trang — để xác nhận rằng "tiếng nói của tôi đã được ghi nhận".

Nhiệm vụ con 5.3: Trả lời bình luận
Mục tiêu:
Chức năng Trả lời bình luận cho phép người dùng gửi phản hồi trực tiếp đến một bình luận cụ thể, tạo ra luồng thảo luận lồng nhau dưới bình luận gốc. Đây là hành động tương tác quan trọng giúp hình thành các cuộc đối thoại có chiều sâu trong cộng đồng. Reply được hiển thị lồng bên dưới bình luận gốc, gắn tag tên người dùng được trả lời để dễ theo dõi ngữ cảnh.

Đầu vào:
Nội dung trả lời (văn bản) do người dùng nhập, với tên người dùng được phản hồi.

Tiền điều kiện:
Người dùng đã đăng nhập hệ thống và tồn tại ít nhất một bình luận trong phần bình luận của video.

Hậu điều kiện:
Reply được lưu vào hệ thống và hiển thị lồng bên dưới bình luận gốc. Thông báo đăng thành công được hiển thị.

Phân rã nhiệm vụ theo HTA:
0.   Trả lời bình luận
1. Xác định bình luận mục tiêu muốn trả lời.
2. Kích hoạt chức năng trả lời.
   2.1. Nhấn "Trả lời" bên thuộc về bình luận mục tiêu.
   2.2. Phần nhập để bình luận trả lời xuất hiện.
3. Nhập nội dung trả lời.
4. Xác nhận đăng reply.
   4.1. Nhấn "Đăng" để gửi.
   4.2. [Ngoại lệ] Hủy đăng bình luận.
5. Hệ thống lưu và hiển thị reply lồng bên dưới bình luận gốc.

Kế hoạch:
Thực hiện theo trình tự: 1 → 2 → 3 → 4 → 5 để đạt mục tiêu hoặc 1→ 2 → 3→ 4 nếu không muốn đăng bình luận.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng:
Đây là chức năng được sử dụng thường xuyên, đặc biệt trong các video có nội dung tạo ra nhiều thảo luận, tranh luận hoặc câu hỏi cần giải đáp.
Về ràng buộc thời gian:
Reply cần được hiển thị ngay sau khi đăng trong vòng dưới 2 giây để duy trì tính liên tục của cuộc thảo luận.
Về mô hình tư duy người dùng: Người dùng hình dung việc trả lời bình luận giống như một cuộc đối thoại trực tiếp - họ đang "quay mặt về phía" một người cụ thể, không phải nói vào khoảng không chung. Người dùng kỳ vọng reply của mình hiển thị lồng bên dưới bình luận gốc - không lẫn vào dòng chảy chung - để người đọc sau có thể theo dõi ngữ cảnh mà không bị lạc mạch.

Nhiệm vụ con 5.4: Sửa bình luận
Mục tiêu:
Chức năng Sửa bình luận cho phép người dùng chỉnh sửa nội dung của bình luận đã đăng mà mình là chủ sở hữu. Đây là chức năng hỗ trợ người dùng sửa lỗi chính tả, cập nhật thông tin hoặc điều chỉnh ý kiến sau khi đã đăng. Sau khi chỉnh sửa, hệ thống tự động gắn nhãn "(đã chỉnh sửa)" để đảm bảo tính minh bạch với những người dùng khác.

Đầu vào:
Nội dung mới của bình luận do người dùng chỉnh sửa trong ô chỉnh sửa.

Tiền điều kiện:
Người dùng đã đăng nhập hệ thống và bình luận cần sửa là của chính người dùng đó.

Hậu điều kiện:
Bình luận được cập nhật với nội dung mới và hiển thị nhãn "(đã chỉnh sửa)" bên cạnh. Thay đổi được phản ánh ngay lập tức.

Phân rã nhiệm vụ theo HTA:
0.   Sửa bình luận
1. Xác định bình luận của mình cần chỉnh sửa.
2. Kích hoạt chế độ chỉnh sửa.
   2.1. Nhấn "Sửa" trên bình luận.
   2.2. Nội dung bình luận hiện tại được điền vào ô chỉnh sửa.
3. Thay đổi nội dung theo ý muốn.
4. Xác nhận lưu chỉnh sửa.
   4.1. Hệ thống kiểm tra nội dung có thay đổi không.
   4.2. Nhấn "Lưu" để xác nhận.
   4.3. [Ngoại lệ] Nhấn "Hủy"
5. Hệ thống cập nhật bình luận và hiển thị nhãn "(đã chỉnh sửa)".

Kế hoạch:
Thực hiện theo trình tự: 1 → 2 → 3 → 4 → 5 để đạt mục tiêu hoặc 1→ 2 → 3→ 4 nếu không muốn sửa bình luận.
Nếu nội dung không thay đổi so với ban đầu ở bước 4.1, hệ thống không thực hiện 4.2.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng:
Đây là chức năng có tần suất sử dụng trung bình, chủ yếu được thực hiện khi người dùng phát hiện lỗi chính tả hoặc muốn cập nhật quan điểm sau khi đăng.
Về ràng buộc thời gian:
Bình luận sau khi chỉnh sửa cần được cập nhật và hiển thị ngay trong vòng dưới 2 giây để người dùng có thể xác nhận thay đổi.
Về mô hình tư duy người dùng: Người dùng xem bình luận như một phát biểu đã được ghi lại - và việc sửa là quyền được "đính chính" phát biểu đó mà không cần xóa đi làm lại. Họ kỳ vọng nội dung cũ hiện sẵn trong ô chỉnh sửa để chỉ cần sửa phần cần thiết, không phải gõ lại từ đầu. Nhãn "(đã chỉnh sửa)" được chấp nhận như một quy ước minh bạch -người dùng đã quen với nó trên nhiều nền tảng và không coi đó là bất lợi, miễn là sửa được.
Nhiệm vụ con 5.5: Xóa bình luận
Mục tiêu:
Chức năng Xóa bình luận cho phép người dùng xóa vĩnh viễn một bình luận mà mình là chủ sở hữu khỏi danh sách bình luận. Đây là thao tác không thể hoàn tác nên yêu cầu bắt buộc có bước xác nhận để tránh xóa nhầm. Khi xóa bình luận gốc, toàn bộ reply lồng bên dưới cũng bị xóa theo nhằm đảm bảo tính nhất quán của dữ liệu.

Đầu vào:
Xác nhận xóa từ người dùng thông qua hộp thoại xác nhận.
Tiền điều kiện:
Người dùng đã đăng nhập hệ thống và bình luận cần xóa là của chính người dùng đó.

Hậu điều kiện:
Bình luận và toàn bộ reply liên quan bị xóa vĩnh viễn khỏi danh sách. Danh sách bình luận được cập nhật lại. Thông báo xóa thành công được hiển thị.

Phân rã nhiệm vụ theo HTA:
0.   Xóa bình luận
1. Xác định bình luận của mình cần xóa.
2. Kích hoạt tùy chọn xóa.
   2.1. Nhấn "Xóa" trên bình luận.
   2.2. Hệ thống yêu cầu xác nhận: "Bạn có chắc muốn xóa bình luận này?".
3. Xác nhận thao tác xóa.
   3.1. Người dùng nhấn "Xác nhận".
   3.2. Người dùng nhấn "Hủy".
4. Hệ thống thực hiện xóa.
   4.1. Xóa bình luận gốc.
   4.2. [Nếu kèm bình luận phản hồi] Xóa toàn bộ reply lồng bên dưới.
5. Danh sách bình luận được cập nhật lại.

Kế hoạch:
Thực hiện theo trình tự: 1 → 2 → 3 → 4 → 5 hoặc 1 → 2 → 3 nếu không muốn tiếp tục thực hiện hành động.
Nếu người dùng nhấn "Hủy" ở bước 3.2 và không có thay đổi nào được thực hiện.
Bước 4.2 chỉ xảy ra khi bình luận đó có phản hồi.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng:
Đây là chức năng có tần suất sử dụng thấp đến trung bình, chủ yếu được thực hiện khi người dùng muốn xóa bình luận không còn phù hợp hoặc đăng nhầm.
Về ràng buộc thời gian:
Thao tác xóa cần được thực hiện và danh sách cập nhật ngay sau khi xác nhận trong vòng dưới 2 giây.
Về mô hình tư duy người dùng: Người dùng hiểu xóa bình luận là hành động không thể lấy lại và họ thường cần dừng lại để suy nghĩ kỹ - đặc biệt khi đang xóa thứ gì đó. Đây là lý do người dùng mong muốn có hộp thoại xác nhận không phải là sự làm phiền mà là một điểm dừng cần thiết.


Nhiệm vụ con 5.6: Lưu video
Mục tiêu:
Chức năng Lưu video cho phép người dùng lưu một video vào danh sách phát để có thể truy cập lại dễ dàng trong tương lai. Người dùng có thể chọn danh sách phát muốn lưu hoặc tạo playlist mới, và dễ dàng bỏ lưu bằng cách nhấn lại vào biểu tượng. Đây là chức năng tổ chức nội dung cá nhân hóa, giúp người dùng quản lý các video yêu thích hoặc muốn xem lại.

Đầu vào:
Video người dùng muốn lưu vào danh sách phát được lựa chọn.

Tiền điều kiện:
Người dùng đã đăng nhập hệ thống và đang xem hoặc duyệt một video hợp lệ.

Hậu điều kiện:
Video được thêm vào danh sách phát đã chọn của tài khoản người dùng. Biểu tượng lưu chuyển sang trạng thái đã lưu. Thông báo lưu video thành công được hiển thị.

Phân rã nhiệm vụ theo HTA:
0.   Lưu video
1. Xác định video muốn lưu.
2. Kích hoạt chức năng lưu.
   2.1. Nhấn "Lưu" trên video.
   2.2. Hệ thống hiển thị danh sách playlist hiện có.
3. Chọn danh sách phát để lưu.
   3.1. Chọn danh sách phát để lưu.
   3.2. [Ngoại lệ] Không thể chọn danh sách phát đã lưu vào.
4. Hệ thống thêm video vào playlist đã chọn.
5. Biểu tượng chuyển sang trạng thái đã lưu.

Kế hoạch:
Thực hiện theo trình tự: 1 → 2 → 3 → 4 → 5 để đạt mục tiêu.
Hành động 3.2 chỉ xảy ra nếu cố gắng chọn một danh sách phát đã lưu video vào

Đặc trưng nhiệm vụ:
Về tần suất sử dụng:
Đây là chức năng có tần suất sử dụng trung bình, thường được dùng khi người dùng muốn xem lại video sau hoặc tổ chức nội dung theo chủ đề.
Về ràng buộc thời gian:
Phản hồi lưu video cần được thực hiện ngay lập tức trong vòng dưới 1 giây, đồng thời trạng thái cần được đồng bộ trên tất cả thiết bị của người dùng.
Về mô hình tư duy người dùng: Người dùng xem hành động lưu video giống như "đánh dấu trang" trong một cuốn sách – nhanh và kỳ vọng tìm lại được sau này đúng chỗ mình đã để. Họ muốn chọn nhanh từ danh sách sẵn có, không phải điều hướng đi đâu khác. Biểu tượng chuyển trạng thái "đã lưu" là tín hiệu quan trọng: "Video này đã ở trong tay tôi rồi, tôi có thể tiếp tục xem."

Nhiệm vụ con 5.7: Thả cảm xúc video
Mục tiêu:
Chức năng Thả cảm xúc video cho phép người dùng bày tỏ cảm nhận với nội dung video thông qua các biểu tượng cảm xúc như like, dislike hoặc các biểu tượng khác. Đây là hành động tương tác nhanh và đơn giản nhất, đồng thời cũng cung cấp dữ liệu phản hồi quan trọng cho cả người tạo nội dung lẫn hệ thống gợi ý. Người dùng có thể đổi cảm xúc hoặc hủy cảm xúc đã chọn bất kỳ lúc nào.

Đầu vào:
Loại cảm xúc người dùng chọn (like, dislike).

Tiền điều kiện:
Người dùng đã đăng nhập hệ thống và đang xem một video hợp lệ.

Hậu điều kiện:
Số lượt cảm xúc tương ứng được cập nhật và hiển thị trên video. Biểu tượng được highlight để xác nhận lựa chọn của người dùng.

Phân rã nhiệm vụ theo HTA:
0.   Thả cảm xúc video
1. Quan sát các biểu tượng cảm xúc bên dưới video.
2. Chọn cảm xúc muốn bày tỏ.
   2.1. Chọn biểu tượng cảm xúc tương ứng (like, dislike).
3. Hệ thống cập nhật số lượt cảm xúc tương ứng.
4. Điều chỉnh cảm xúc nếu cần.
   4.1. Nhấn vào cảm xúc khác để thay đổi.
   4.2. Nhấn lại vào cảm xúc đã chọn để hủy.

Kế hoạch:
Thực hiện theo trình tự: 1 → 2 → 3.
Bước 4 là tùy chọn, người dùng có thể thực hiện bất kỳ lúc nào sau khi đã thả cảm xúc. Hệ thống đảm bảo không xảy ra tình trạng double-count khi người dùng đổi hoặc hủy cảm xúc.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng:
Đây là chức năng được sử dụng rất thường xuyên, là hành động tương tác đơn giản và phổ biến nhất do chỉ cần một thao tác nhấn duy nhất.
Về ràng buộc thời gian:
Số liệu cảm xúc cần được cập nhật và hiển thị ngay lập tức trong vòng dưới 1 giây để người dùng nhận được phản hồi tức thì về hành động của mình.
Về mô hình tư duy người dùng:
Người dùng xem việc thả cảm xúc như một hành động bỏ phiếu nhanh, thể hiện sự đồng tình hoặc không đồng tình với nội dung. Họ kỳ vọng biểu tượng sẽ thay đổi trạng thái ngay lập tức và số liệu được cập nhật chính xác mà không cần tải lại trang.


3.7. Nhiệm vụ 6: Tương tác danh sách cá nhân
Mục tiêu: Cho phép người dùng hệ thống hóa, lưu trữ và quản lý các bộ sưu tập video theo nhu cầu cá nhân, đồng thời tối ưu hóa trải nghiệm xem video liên tục và có chủ đích trên nền tảng.

Mô hình tư duy: Người dùng thường xuyên sử dụng nền tảng video không theo kiểu "xem ngẫu nhiên" mà theo kiểu "quản lý nội dung như một thư viện cá nhân". Hành vi này xuất phát từ hai nhu cầu song song:
Thứ nhất là nhu cầu tổ chức chủ động: người dùng muốn nhóm các video theo chủ đề, mục đích hoặc tâm trạng (ví dụ: "học lập trình", "nhạc thư giãn", "xem sau"). Hành vi này tương đồng với cách người dùng tạo playlist nhạc hoặc thư mục bookmark trên trình duyệt - đây là bằng chứng cho thấy mô hình tư duy "phân loại để dễ truy xuất" đã ăn sâu vào thói quen số.
Thứ hai là nhu cầu truy xuất thụ động: nền tảng tự động ghi lại các dấu vết tương tác của người dùng (video đã thích, lịch sử xem, kênh đã theo dõi). Người dùng kỳ vọng có thể quay lại và duyệt qua những dấu vết này như một bộ nhớ mở rộng - không cần phải nhớ tên video hay kênh, nền tảng nhớ thay.
Hai nhu cầu này cùng hình thành mô hình tư duy: "Nền tảng là nơi tôi vừa khám phá nội dung mới, vừa quản lý kho nội dung của riêng mình." Người dùng kỳ vọng có toàn quyền kiểm soát - tạo, sửa, xóa danh sách - lẫn quyền quan sát lại hành vi của bản thân thông qua lịch sử và các mục đã tương tác.

Các nhiệm vụ con:
1. Tạo danh sách phát
2. Sửa danh sách phát
3. Xóa danh sách phát
4. Xem toàn bộ danh sách phát
5. Xóa video khỏi danh sách phát
6. Xem các kênh đã theo dõi
7. Xem các video đã thích
8. Xem lịch sử xem video

















Nhiệm vụ con 6.1: Tạo danh sách phát
Mục tiêu: Người dùng thiết lập một danh sách phát mới để bắt đầu tổ chức và lưu trữ các video theo sở thích cá nhân hoặc chủ đề riêng biệt.

Đầu vào: Tiêu đề playlist (dữ liệu văn bản). Mô tả danh sách phát (tùy chọn). Trạng thái/chế độ hiển thị (Công khai, Riêng tư).

Tiền điều kiện: Người dùng đã đăng nhập thành công vào hệ thống. Người dùng đang ở trang quản lý playlist cá nhân hoặc đang thực hiện luồng lưu video trực tiếp từ giao diện xem video.

Hậu điều kiện (Đầu ra): Hệ thống khởi tạo thực thể mới, lưu dữ liệu và đưa playlist vào hồ sơ người dùng. Playlist mới xuất hiện ngay lập tức trong danh sách playlist cá nhân. Hệ thống hiển thị thông báo tạo playlist thành công.

Phân rã nhiệm vụ theo HTA: 
0. Tạo danh sách phát mới
1. Kích hoạt chức năng tạo danh sách
1.1. Nhấn "Tạo playlist mới”.
2. Khai báo thông tin danh sách phát
2.1. Hệ thống hiển thị yêu cầu nhập thông tin.
2.2. Nhập Tiêu đề danh sách phát (bắt buộc).
2.3. [Luồng phụ] Nhập Mô tả danh sách phát (tùy chọn).
2.4. Lựa chọn chế độ hiển thị mong muốn (Công khai / Riêng tư).
3. Xác nhận và lưu trữ
3.1. Nhấn "Xác nhận".
3.2. [Ngoại lệ] Nhấn “Hủy” → Hệ thống không thay đổi
3.3. Hệ thống kiểm tra tính hợp lệ của dữ liệu đầu vào.
3.4. [Ngoại lệ] Dữ liệu không hợp lệ (tiêu đề trống hoặc trùng lặp) → Hệ thống chặn thao tác lưu, hiển thị thông báo lỗi yêu cầu người dùng điều chỉnh.
3.5. Hệ thống lưu thành công và cập nhật danh sách.

Kế hoạch thực hiện: 
Kế hoạch 0: Thực hiện theo trình tự 1 → 2 → 3 để hoàn thành việc tạo playlist.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng: Trung bình. Hành động này thường chỉ được thực hiện khi người dùng có nhu cầu phân loại nội dung mới hoặc bắt đầu mở rộng một chủ đề lưu trữ mới.
Về ràng buộc thời gian: Yêu cầu phản hồi nhanh (< 2 giây) kể từ lúc nhấn "Xác nhận". Giao diện cần đóng popup và hiển thị cập nhật danh sách ngay lập tức để duy trì tính liền mạch, đặc biệt là khi người dùng đang tạo playlist trong lúc xem video.
Về mô hình tư duy người dùng: Người dùng hình dung việc tạo playlist giống như việc lấy một tờ giấy trắng và đặt tên cho nó trước khi bắt đầu ghi chép - hành động tạo ra "chiếc hộp" trước, rồi mới bỏ đồ vào sau. Họ kỳ vọng thao tác này diễn ra nhanh, gọn và không đòi hỏi quá nhiều thông tin bắt buộc: tên playlist là đủ để bắt đầu, mô tả hay chế độ hiển thị là thứ họ có thể điền sau hoặc bỏ qua. Bước xác nhận tạo thành công - thể hiện qua thông báo và playlist xuất hiện ngay trong danh sách - là tín hiệu đóng vòng quan trọng, cho họ biết "chiếc hộp đã sẵn sàng để dùng".
Nhiệm vụ con 6.2: Sửa danh sách phát
Mục tiêu: Người dùng thực hiện thao điều chỉnh nội dung thông tin mô tả bên trong một playlist hiện có.

Đầu vào: Lệnh kích hoạt thao tác từ người dùng (nhấn "Sửa"). Các thông tin cập nhật mới (Tiêu đề, Mô tả, Chế độ hiển thị hoặc hành động với video).

Tiền điều kiện: Người dùng đã đăng nhập hệ thống thành công. Tồn tại ít nhất một danh sách phát thuộc quyền sở hữu của người dùng, hoặc người dùng đang xem một video và muốn lưu/điều chỉnh vào danh sách.

Hậu điều kiện: Trạng thái của video và thông tin playlist được hệ thống cập nhật và đồng bộ tương ứng. Giao diện hiển thị thông báo phản hồi thao tác thành công (hoặc thông báo lỗi nếu có sự cố).

Phân rã nhiệm vụ theo HTA: 
0. Chỉnh sửa thông tin và quản lý danh sách phát
1. Truy cập chức năng chỉnh sửa
1.1. Truy cập vào trang danh sách phát cá nhân.
1.2. Nhấn "Sửa" hoặc biểu tượng cây bút trên playlist cần thay đổi.
2. Thực hiện các cập nhật thông tin/nội dung
2.1. Cập nhật Tiêu đề mới cho danh sách phát.
2.2. Cập nhật nội dung Mô tả.
2.3. Thay đổi chế độ hiển thị (Công khai / Riêng tư).
3. Xác nhận và đồng bộ dữ liệu
3.1. Nhấn nút "Lưu" để hoàn tất.
3.2. [Ngoại lệ] Nhấn “Hủy” → Hệ thống không thay đổi
3.3. Hệ thống tiến hành cập nhật đồng bộ dữ liệu.

Kế hoạch thực hiện:
Kế hoạch 0: Thực hiện trình tự 1 → 2 → 3 để hoàn tất việc chỉnh sửa thông tin chung (tiêu đề, mô tả, quyền riêng tư). Ở bước 2, người dùng có thể tùy chọn thực hiện bất kỳ tổ hợp nào từ 2.1 đến 2.3 tùy theo nhu cầu điều chỉnh của phiên làm việc đó.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng: Cao. Đây là hoạt động diễn ra thường xuyên nhất để người dùng duy trì, cập nhật và làm phong phú kho nội dung cá nhân của mình theo thời gian.
Về ràng buộc thời gian: Yêu cầu phản hồi tức thì (< 1 giây). Hệ thống cần xử lý và hiển thị kết quả ngay lập tức để đảm bảo tính đồng bộ dữ liệu, mang lại cảm giác mượt mà khi thao tác.
Về mô hình tư duy người dùng: Người dùng nhìn nhận việc sửa playlist như việc dán lại nhãn trên một chiếc hộp đang dùng - không phá vỡ nội dung bên trong, chỉ điều chỉnh phần bao bì cho phù hợp hơn với thực tế hiện tại. Họ kỳ vọng thông tin cũ hiển thị sẵn trong ô chỉnh sửa để chỉ cần sửa phần muốn thay đổi, không phải nhập lại từ đầu. Hành động thay đổi chế độ hiển thị từ Riêng tư sang Công khai là trường hợp đặc biệt đòi hỏi sự chú ý cao hơn, vì nó có tính lan rộng: người dùng cần hiểu rằng sau thao tác đó, nội dung playlist sẽ trở nên hiển thị với người khác.

Nhiệm vụ con 6.3: Xóa danh sách phát
Mục tiêu: Người dùng thực hiện loại bỏ hoàn toàn một danh sách phát không còn nhu cầu sử dụng khỏi tài khoản cá nhân.

Đầu vào: Lệnh yêu cầu xóa danh sách phát từ người dùng. Lệnh xác nhận đồng ý xóa từ hộp thoại cảnh báo của hệ thống.

Tiền điều kiện: Người dùng đã đăng nhập thành công vào hệ thống. Danh sách phát yêu cầu xóa phải tồn tại và thuộc quyền sở hữu của người dùng hiện tại.

Hậu điều kiện : Playlist cùng các liên kết bên trong bị xóa vĩnh viễn khỏi danh sách cá nhân và cơ sở dữ liệu của người dùng. Giao diện được cập nhật và hiển thị thông báo phản hồi xóa thành công.

Phân rã nhiệm vụ theo HTA:
0. Xóa danh sách phát
1. Xác định danh sách phát cần xóa
1.1. Tìm đến danh sách phát không còn nhu cầu sử dụng.
2. Kích hoạt lệnh xóa
2.1. Nhấn vào tùy chọn "Xóa".
2.2. Hệ thống tạm dừng thao tác và hiển thị cảnh báo về việc hành động này là vĩnh viễn và không thể khôi phục.
3. Xác nhận và xử lý hệ thống
3.1. Đọc cảnh báo và nhấn nút "Xác nhận xóa".
3.2. Hệ thống thực hiện gỡ bỏ playlist cùng toàn bộ các liên kết video bên trong khỏi hồ sơ người dùng.
3.3. Hệ thống cập nhật lại giao diện danh sách và hiển thị thông báo xóa thành công.

Kế hoạch thực hiện:
Kế hoạch 0: Thực hiện theo trình tự tuyến tính 1 → 2 → 3 để đảm bảo quá trình xóa diễn ra an toàn và người dùng có đủ không gian để xác nhận trước khi hệ thống thực thi lệnh xóa vĩnh viễn.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng: Thấp. Hành động này không diễn ra thường xuyên, thường chỉ được thực hiện vào những thời điểm người dùng muốn dọn dẹp định kỳ kho nội dung của mình.
Về ràng buộc thời gian: Yêu cầu phản hồi cập nhật ngay lập tức (< 2 giây) sau khi người dùng nhấn xác nhận, giúp người dùng thấy ngay kết quả thay đổi trên giao diện mà không phải chờ đợi.
Về mô hình tư duy người dùng: Người dùng xem việc xóa playlist như việc vứt đi cả một chiếc hộp - không chỉ đổ nội dung ra ngoài mà loại bỏ hoàn toàn cái hộp đó. Điều quan trọng là họ biết các video bên trong không bị mất - video vẫn tồn tại trên nền tảng - chỉ có "bộ sưu tập" do họ tạo ra mới biến mất. Tuy nhiên, sự phân biệt này không phải lúc nào cũng rõ ràng trong tâm trí người dùng, khiến họ đôi khi do dự. Hộp thoại xác nhận vì vậy không chỉ là rào cản chống xóa nhầm mà còn là nơi hệ thống cần giải thích ngắn gọn điều gì thực sự xảy ra, để người dùng ra quyết định với đầy đủ thông tin.
Nhiệm vụ con 6.4: Xem toàn bộ danh sách phát
Mục tiêu: Cho phép người dùng xem danh sách chi tiết các video thành phần và các thông tin bổ trợ trong một playlist cụ thể, từ đó lựa chọn phương thức thưởng thức nội dung (phát toàn bộ hoặc chọn video bất kỳ).

Đầu vào: Lựa chọn một Playlist cụ thể từ giao diện tổng quan (kết quả của Nhiệm vụ 4). Thao tác chọn chế độ phát của người dùng ("Phát tất cả" hoặc chọn video lẻ).

Tiền điều kiện: Người dùng đã chọn một danh sách phát từ trang tổng quan (Thư viện cá nhân hoặc Trang kênh của người khác). Danh sách phát phải ở trạng thái "Công khai" hoặc "Riêng tư" (nếu truy cập qua liên kết) nếu người xem không phải là chủ sở hữu; hoặc thuộc sở hữu của chính tài khoản đang đăng nhập.

Hậu điều kiện: Giao diện chi tiết của Playlist được hiển thị đầy đủ thông tin (tên playlist, mô tả, số lượng video) và danh sách video thành phần. Trình phát video được kích hoạt thành công đi kèm với danh sách chờ (Queue) tương ứng của playlist đó.

Phân rã nhiệm vụ theo HTA: 
0. Xem nội dung chi tiết và kích hoạt phát danh sách phát
1. Hiển thị giao diện chi tiết Playlist
1.1. Hệ thống tải và hiển thị các thông tin bổ trợ ở cột tổng quan: Tên playlist, ảnh thu nhỏ đại diện (thumbnail), số lượng video, tên người tạo và nội dung mô tả.
1.2. Hệ thống liệt kê toàn bộ danh sách các video thành phần bên trong theo đúng thứ tự sắp xếp.
1.3. Giao diện hiển thị rõ dữ liệu của từng video bao gồm: số thứ tự, ảnh thu nhỏ video, tiêu đề video, tên kênh sở hữu và thời lượng video.
2. Kích hoạt nội dung
2.1. Người dùng chọn một video cụ thể bất kỳ trong danh sách để bắt đầu xem → nhiệm vụ 5.1.

Kế hoạch thực hiện:
Kế hoạch 0: Thực hiện theo trình tự tuyến tính 1 → 2 hoặc chỉ dừng ở bước 1. Ở bước 2, người dùng linh hoạt lựa chọn thực hiện luồng phát tự động toàn bộ (2.1) hoặc chủ động chọn một điểm bắt đầu cụ thể (2.2) tùy theo nhu cầu xem tại thời điểm đó.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng: Rất cao. Đây là bước hành động bản lề và trực tiếp nhất ngay trước khi người dùng tiêu thụ nội dung video đã qua phân loại, hệ thống hóa trên nền tảng.
Về ràng buộc thời gian: Yêu cầu tải dữ liệu nhanh (< 2 giây) để hiển thị đầy đủ danh sách video, ảnh thu nhỏ và thông tin playlist, tránh tạo ra độ trễ làm đứt quãng trải nghiệm liền mạch của người dùng.
Về mô hình tư duy người dùng: Người dùng hình dung trang chi tiết playlist như việc mở nắp một chiếc hộp đã được sắp xếp sẵn - họ muốn thấy ngay toàn bộ nội dung bên trong, theo đúng thứ tự họ. Họ đến đây với một trong hai mục đích rõ ràng: hoặc phát từ đầu đến cuối mà không cần chọn lựa, hoặc tìm đúng một video cụ thể để bắt đầu từ đó. Giao diện lý tưởng trong mắt họ là một danh sách rõ ràng, có thứ tự, đủ thông tin để nhận diện từng video chỉ bằng một lần quét mắt.
Nhiệm vụ con 6.5: Xóa video khỏi danh sách phát
Mục tiêu: Người dùng thực hiện các thao tác quản lý bên trong một danh sách phát hiện có để loại bỏ những video không còn phù hợp hoặc không còn nhu cầu lưu trữ.

Đầu vào:  Lựa chọn thao tác của người dùng đối với một video cụ thể (Lệnh Xóa video).

Tiền điều kiện: Người dùng đã đăng nhập hệ thống thành công. Tồn tại ít nhất một danh sách phát thuộc quyền sở hữu của người dùng.

Hậu điều kiện (Đầu ra): Trạng thái của video và danh sách phát được hệ thống cập nhật tương ứng (video bị gỡ bỏ, tổng số lượng video trong playlist giảm xuống). Hệ thống hiển thị thông báo phản hồi thao tác thành công (hoặc thông báo lỗi nếu có sự cố).

Phân rã nhiệm vụ theo HTA: 
0. Xóa video khỏi playlist
1. Truy cập danh sách phát
1.1. Truy cập vào giao diện "Xem nội dung playlist" của danh sách phát cần quản lý.
2. Kích hoạt lệnh xóa video
2.1. Tìm đến video cụ thể cần gỡ bỏ trong danh sách.
2.2. Yêu cầu xóa khỏi danh sách phát.
3. Xác nhận và cập nhật hệ thống
3.1. Xác nhận yêu cầu gỡ bỏ video khỏi danh sách phát (nếu hệ thống yêu cầu xác nhận bước đệm).
3.2. Hệ thống tiến hành gỡ liên kết video khỏi playlist, cập nhật lại danh sách và số lượng video ngay lập tức.

Kế hoạch thực hiện:
Kế hoạch 0: Thực hiện theo trình tự tuyến tính 1 → 2 → 3 để hoàn thành thao tác gỡ bỏ một video. Nếu người dùng muốn xóa nhiều video, sẽ lặp lại chu trình từ bước 2 sau khi bước 3 hoàn tất.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng: Cao. Đây là hoạt động diễn ra thường xuyên nhất để người dùng duy trì, chọn lọc và làm mới kho nội dung bộ sưu tập cá nhân.
Về ràng buộc thời gian: Yêu cầu phản hồi tức thì (< 1 giây). Sau khi xác nhận xóa, video phải biến mất khỏi danh sách ngay lập tức để đảm bảo cảm giác mượt mà và tính đồng bộ dữ liệu liên tục.
Về mô hình tư duy người dùng: Người dùng xem thao tác này như việc lấy một món đồ ra khỏi chiếc hộp mà không vứt đi món đồ đó - video vẫn còn trên nền tảng, chỉ là không còn thuộc bộ sưu tập này nữa. Vì tính chất không phá hủy của thao tác, họ kỳ vọng hệ thống không cần hỏi xác nhận thêm - xóa thẳng, nhanh, và video biến mất ngay khỏi danh sách. Nếu hệ thống thêm bước xác nhận, người dùng sẽ cảm thấy bị làm chậm không cần thiết. Ngược lại, nếu hệ thống hỗ trợ hoàn tác (undo) trong vài giây ngay sau khi xóa, đó lại là một tín hiệu an toàn được đón nhận tốt hơn nhiều so với hộp thoại xác nhận.



Nhiệm vụ con 6.6: Xem các kênh đã theo dõi
Mục tiêu: Cho phép người dùng truy cập và duyệt danh sách toàn bộ các kênh mà họ đã đăng ký theo dõi để nhanh chóng tiếp cận nội dung từ các nhà sáng tạo yêu thích.

Đầu vào: Lệnh yêu cầu xem danh sách từ người dùng. Từ khóa tìm kiếm hoặc các điều kiện lọc bổ sung (tùy chọn).

Tiền điều kiện: Người dùng đã đăng nhập thành công vào hệ thống. Người dùng đã thực hiện hành động theo dõi ít nhất một kênh trước đó (nếu chưa từng theo dõi kênh nào, hệ thống sẽ hiển thị danh sách ở trạng thái trống).

Hậu điều kiện: Danh sách các kênh đã theo dõi được hệ thống truy xuất và hiển thị trực quan trên màn hình. Người dùng có thể xem tóm tắt thông tin kênh hoặc chuyển hướng thành công đến trang chủ của kênh đó.

Phân rã nhiệm vụ theo HTA:
0. Xem các kênh đã theo dõi
1. Kích hoạt yêu cầu xem danh sách
1.1. Nhấn vào mục "Kênh đã theo dõi".
2. Hệ thống tải và hiển thị dữ liệu
2.1. Hệ thống thực hiện truy vấn cơ sở dữ liệu để lấy danh sách các kênh liên kết với ID người dùng.
2.2. Hệ thống hiển thị danh sách các kênh bao gồm thông tin tóm tắt: ảnh đại diện (avatar), tên kênh và số lượng người đăng ký.
2.3. [Ngoại lệ] Tài khoản chưa theo dõi kênh nào → Hiển thị giao diện danh sách trống kèm thông báo gợi ý khám phá.
3. Tương tác và duyệt danh sách
3.1. [Luồng phụ] Sử dụng nhập từ khóa tìm kiếm để tìm nhanh một kênh cụ thể trong danh sách.
3.2. [Luồng phụ] Cuộn trang để duyệt thêm danh sách nếu số lượng kênh theo dõi lớn.
3.3. Nhấn chọn một kênh cụ thể để chuyển hướng sang giao diện Xem kênh của nhà sáng tạo đó → Nhiệm vụ 4

Kế hoạch thực hiện:
Kế hoạch 0: Thực hiện theo trình tự tuyến tính 1 → 2  hoặc 1 → 2 → 3. Ở bước 3, người dùng có thể linh hoạt sử dụng các tính năng hỗ trợ như tìm kiếm (3.1) hoặc cuộn trang (3.2) trước khi đưa ra quyết định cuối cùng là chọn một kênh để xem chi tiết (3.3).

Đặc trưng nhiệm vụ:
Về tần suất sử dụng: Cao. Người dùng thường xuyên truy cập vào mục này như một thói quen để cập nhật và kiểm tra các nội dung mới nhất từ các kênh mà họ yêu thích.
Về ràng buộc thời gian: Yêu cầu phản hồi nhanh (< 2 giây) để tải dữ liệu, giúp hiển thị danh sách và ảnh đại diện một cách mượt mà, không gây ức chế khi lướt.
Về mô hình tư duy người dùng: Người dùng hình dung danh sách kênh đã theo dõi như một danh bạ liên lạc cá nhân. Họ kỳ vọng ảnh đại diện và tên kênh hiển thị đủ rõ để nhận ra ngay mà không cần đọc kỹ, và trang kênh được mở nhanh khi nhấn vào.

Nhiệm vụ con 6.7: Xem các video đã thích
Mục tiêu: Cho phép người dùng truy cập và xem lại toàn bộ danh sách các video mà họ đã bày tỏ cảm xúc tích cực (Like) trước đó.

Đầu vào: Lệnh yêu cầu truy cập danh sách từ người dùng. Từ khóa tìm kiếm hoặc bộ lọc áp dụng trên danh sách (nếu có).

Tiền điều kiện: Người dùng đã đăng nhập thành công vào hệ thống. Hệ thống đã ghi nhận các hành động thả cảm xúc "Like" của người dùng đối với các video.

Hậu điều kiện: Danh sách các video đã thích được hiển thị đầy đủ trên giao diện. Nếu người dùng chưa thích video nào, hệ thống hiển thị thông báo trạng thái danh sách trống.

Phân rã nhiệm vụ theo HTA:
0. Xem các video đã thích
1. Kích hoạt yêu cầu xem danh sách
1.1. Truy cập mục "Video đã thích" 
2. Hệ thống xử lý và hiển thị dữ liệu
2.1. Hệ thống truy xuất dữ liệu từ danh sách các video mà ID người dùng này đã nhấn Like.
2.2. Hệ thống hiển thị danh sách video kèm các thông tin cơ bản: ảnh thu nhỏ (thumbnail), tiêu đề video, tên kênh, lượt xem và thời gian đăng tải.
2.3. [Ngoại lệ] Hệ thống hiển thị trạng thái danh sách trống nếu không có dữ liệu.
3. [Luồng phụ] Tương tác và duyệt danh sách
3.1. Nhấn chọn một video cụ thể để hệ thống chuyển hướng và bắt đầu phát lại nội dung → Nhiệm vụ 5.1: Xem video
3.2. [Luồng phụ] Cuộn trang để duyệt thêm danh sách nếu chưa tìm được video phù hợp.


Kế hoạch thực hiện:
Kế hoạch 0: Thực hiện theo trình tự 1 → 2. Ở bước 3, người dùng có thể tùy chọn duyệt danh sách thủ công hoặc cuộn trang để tìm và lặp lại hành động.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng: Cao. Người dùng thường xuyên tìm lại các nội dung họ yêu thích để xem lại hoặc chia sẻ cho người khác.
Về ràng buộc thời gian: Yêu cầu phản hồi nhanh (< 2 giây) để tải toàn bộ danh sách và các hình ảnh thumbnail mượt mà, không gây gián đoạn.
Về mô hình tư duy người dùng: Người dùng xem danh sách video đã thích như một kho lưu trữ cảm xúc cá nhân - tập hợp những khoảnh khắc họ đã từng nhấn Like như một phản xạ tức thì. Điều thú vị là khi quay lại danh sách này, họ thường không nhớ chính xác mình đã thích những gì, nên ảnh thu nhỏ và tiêu đề video đóng vai trò kích hoạt ký ức thay vì cung cấp thông tin mới. Họ kỳ vọng danh sách đồng bộ tức thì với hành động Unlike ở bất kỳ nơi nào trên hệ thống - nếu họ vừa bỏ thích một video mà video đó vẫn còn trong danh sách này, trải nghiệm bị phá vỡ ngay lập tức.


Nhiệm vụ con 6.8: Xem lịch sử xem video
Mục tiêu: Cho phép người dùng truy cập và xem lại danh sách các video đã từng xem trước đó, giúp dễ dàng tìm lại nội dung cũ hoặc theo dõi tiếp các video đang xem dở.

Đầu vào: Lệnh yêu cầu xem lịch sử từ người dùng. Lệnh xóa lịch sử hoặc từ khóa tìm kiếm (nếu có).

Tiền điều kiện: Người dùng đã đăng nhập thành công vào hệ thống. Hệ thống đã tự động ghi nhận và lưu trữ hoạt động xem video của người dùng trong quá khứ.

Hậu điều kiện : Danh sách video đã xem được hiển thị trực quan theo trình tự thời gian từ gần nhất đến xa nhất. Nếu chưa có dữ liệu xem, hệ thống hiển thị thông báo trạng thái danh sách rỗng.

Phân rã nhiệm vụ theo HTA:
0. Xem và quản lý lịch sử xem video
1. Kích hoạt yêu cầu xem lịch sử
1.1. Nhấn vào mục "Lịch sử xem"
2. Hệ thống tải và hiển thị dữ liệu
2.1. Hệ thống thực hiện truy vấn cơ sở dữ liệu để lấy danh sách các video đã xem liên kết với tài khoản.
2.2. Hệ thống hiển thị danh sách video bao gồm: ảnh thu nhỏ (thumbnail), tiêu đề video, tên kênh.
2.3. [Ngoại lệ] Hệ thống hiển thị thông báo danh sách rỗng nếu tài khoản chưa ghi nhận lượt xem nào.
3. [Luồng phụ] Tương tác và duyệt danh sách
3.1. Nhấn chọn một video cụ thể để hệ thống chuyển hướng và bắt đầu phát lại nội dung → Nhiệm vụ 5.1: Xem video
3.2. [Luồng phụ] Cuộn trang để duyệt thêm danh sách nếu chưa tìm được video phù hợp.
3.3. [Luồng phụ] Thực hiện thao tác xóa một hoặc nhiều video cụ thể khỏi lịch sử.

Kế hoạch thực hiện:
Kế hoạch 0: Thực hiện theo trình tự 1 → 2. Sau khi danh sách được hiển thị, người dùng có thể linh hoạt thực hiện các bước ở cụm 3 để tiếp tục xem nội dung mình đang quan tâm.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng: Cao. Người dùng thường xuyên truy cập để tìm lại nội dung đã xem hoặc kiểm soát các dấu vết hoạt động cá nhân (quyền riêng tư).
Về ràng buộc thời gian: Yêu cầu phản hồi nhanh (< 2 giây) để tải toàn bộ danh sách và cập nhật chính xác các trạng thái tiến độ xem (thanh thời lượng xem dở).
Về mô hình tư duy người dùng: Người dùng hình dung lịch sử xem như một cuốn nhật ký tự động được hệ thống viết thay - họ không cần làm gì, hệ thống ghi lại tất cả. Khi truy cập, họ tìm lại một video xem dở để tiếp tục. Cả hai mục đích đều đòi hỏi danh sách được tổ chức rõ ràng theo mốc thời gian: "Hôm nay", "Hôm qua", "Tuần trước" vì người dùng nhớ ngữ cảnh thời gian tốt hơn là nhớ tên video.
3.8. Nhiệm vụ 7: Quản lý kênh cá nhân
Mục tiêu: Cho phép người dùng đóng vai trò người sáng tạo nội dung — xây dựng và duy trì một kênh cá nhân có bản sắc riêng, quản lý toàn bộ vòng đời của video được đăng tải, và theo dõi hiệu quả hoạt động của kênh thông qua dữ liệu thống kê.

Mô hình tư duy: Khi người dùng chuyển từ vai trò người xem sang vai trò người tạo nội dung, mô hình tư duy của họ thay đổi hoàn toàn. Họ không còn đặt câu hỏi "Tôi muốn xem gì?" mà bắt đầu đặt câu hỏi "Tôi muốn được nhìn nhận như thế nào?" và "Nội dung của tôi có đang hoạt động hiệu quả không?".
Điều này dẫn đến ba nhóm kỳ vọng rõ ràng:
1. Kỳ vọng về bản sắc: Người tạo nội dung muốn kênh của mình phản ánh đúng cá nhân hoặc thương hiệu của họ — qua tên kênh, ảnh đại diện, mô tả. Đây là lý do module tùy chỉnh hồ sơ kênh hình thành.
2. Kỳ vọng về kiểm soát nội dung: Sau khi đăng video, người tạo nội dung vẫn cần quyền chỉnh sửa thông tin (tiêu đề, mô tả, thumbnail) hoặc gỡ bỏ nội dung không phù hợp. Vòng đời nội dung không kết thúc ở lúc đăng — đây là bằng chứng cho sự cần thiết của module quản lý video (thêm, sửa, xóa).
3. Kỳ vọng về phản hồi: Người tạo nội dung cần biết kênh của mình đang hoạt động ra sao để điều chỉnh chiến lược. Nhu cầu đo lường này — dù ở mức cơ bản — là lý do module xem thống kê xuất hiện như một phần tất yếu.
Ba nhóm kỳ vọng này không hoạt động độc lập mà tạo thành một vòng lặp: tạo nội dung → quan sát phản hồi → điều chỉnh hồ sơ và nội dung → tạo nội dung tốt hơn.

Các nhiệm vụ con:
1. Tùy chỉnh hồ sơ kênh
2. Quản lý video cá nhân
3. Xem thống kê kênh





















Nhiệm vụ 7.1: Tùy chỉnh hồ sơ kênh
Mục tiêu: Chức năng Tùy chỉnh hồ sơ kênh cho phép người tạo nội dung cập nhật và quản lý thông tin đại diện của kênh trên nền tảng. Người dùng có thể thay đổi ảnh kênh, tên kênh, mô tả và các đường liên kết liên quan. Đây là "bộ mặt" của kênh đối với người xem, do đó việc duy trì thông tin chính xác và cập nhật là cần thiết để xây dựng hình ảnh kênh chuyên nghiệp.

Đầu vào: Ảnh kênh (ảnh đại diện), tên kênh, thông tin mô tả kênh, đường liên kết mạng xã hội hoặc website.

Tiền điều kiện: Người dùng đã đăng nhập vào hệ thống và sở hữu một kênh cá nhân hợp lệ.

Hậu điều kiện: Thông tin hồ sơ kênh được cập nhật thành công và phản ánh ngay trên trang kênh. Các thay đổi bị hủy nếu người dùng chọn không lưu khi rời trang.

Phân rã nhiệm vụ theo HTA:
0.  Tùy chỉnh hồ sơ kênh
1. Truy cập trang tùy chỉnh hồ sơ kênh.
2. Tùy chỉnh ảnh kênh.
2.1. Nhấn vào vùng ảnh kênh hiện tại để mở tùy chọn.
2.2. Chọn "Thêm ảnh" nếu chưa có ảnh hoặc "Thay đổi ảnh" nếu đã có.
2.3. Chọn tệp ảnh từ thiết bị.
2.4. [Ngoại lệ] Tệp không đúng định dạng hoặc vượt dung lượng → hệ thống hiển thị thông báo lỗi, yêu cầu chọn lại.
2.5. Ảnh xem trước được hiển thị để người dùng kiểm tra.
2. Chỉnh sửa tên người dùng.
2.1. Nhấn vào trường tên người dùng và chỉnh sửa.
2.2. [Ngoại lệ] Người dùng để trống tên kênh → hệ thống hiển thị cảnh báo "Tên người dùng không được để trống", chặn lưu.
3. Chỉnh sửa tên kênh.
3.1. Nhấn vào trường tên kênh và chỉnh sửa.
3.2. [Ngoại lệ] Người dùng để trống tên kênh → hệ thống hiển thị cảnh báo "Tên kênh không được để trống", chặn lưu.
4. Chỉnh sửa mô tả kênh.
4.1. Nhấn vào trường mô tả và chỉnh sửa nội dung.
4.2. Trường mô tả có thể để trống, không bắt buộc.





5. Quản lý đường liên kết.
5.1. Nhấn "Thêm liên kết" để thêm URL mới.
5.2. Nhập URL vào trường liên kết.
5.3. [Ngoại lệ] URL không đúng định dạng → hệ thống hiển thị cảnh báo, không cho phép lưu liên kết đó.
5.4. Nhấn biểu tượng xóa bên cạnh liên kết để gỡ bỏ một liên kết đã có.
6. Lưu toàn bộ thay đổi.
6.1. Nhấn nút "Lưu".
6.2. Hệ thống kiểm tra validate toàn bộ (tên kênh không trống, URL hợp lệ).
6.3. [Ngoại lệ] Còn lỗi validate → hệ thống làm nổi bật các trường lỗi, không thực hiện lưu.
6.4. Lưu thành công → hệ thống hiển thị thông báo cập nhật thành công.
7. [Luồng ngoại lệ] Người dùng rời trang khi chưa lưu.
7.1. Hệ thống phát hiện có thay đổi chưa được lưu.
7.2. Hệ thống hiển thị hộp thoại: "Bạn có muốn lưu các thay đổi trước khi rời trang không?".
7.3a. Người dùng chọn "Lưu" → thực hiện bước 6, sau đó rời trang.
7.3b. Người dùng chọn "Không lưu" → rời trang, hủy toàn bộ thay đổi.
7.3c. Người dùng chọn "Hủy" → ở lại trang, tiếp tục chỉnh sửa.

Kế hoạch:
Kế hoạch 0: Thực hiện bước 1 trước, sau đó người dùng thực hiện các bước 2, 3, 4, 5 theo bất kỳ thứ tự nào tùy nhu cầu — không bắt buộc phải thực hiện tất cả, ngoại trừ bước 3 bắt buộc phải có giá trị hợp lệ. Sau khi hoàn tất chỉnh sửa, thực hiện bước 6 để lưu.
Nếu validate thất bại tại bước 6.3, quay lại các bước tương ứng để sửa lỗi trước khi lưu lại.
Nếu người dùng rời trang bất kỳ lúc nào trong quá trình chỉnh sửa mà chưa thực hiện bước 6, thực hiện bước 7.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng:
Đây là chức năng được sử dụng không thường xuyên nhưng quan trọng, thường được thực hiện khi người dùng mới tạo kênh hoặc muốn làm mới hình ảnh kênh theo thời gian.
Về ràng buộc thời gian:
Các thay đổi cần được lưu và hiển thị ngay sau khi xác nhận để người dùng có thể kiểm tra kết quả tức thì.
Về mô hình tư duy người dùng:
Người dùng xem trang tùy chỉnh hồ sơ như việc cập nhật "trang cá nhân" hoặc "danh thiếp điện tử" của kênh. Họ kỳ vọng các trường thông tin được trình bày rõ ràng, có phản hồi ngay khi nhập sai, và có cơ chế an toàn khi vô tình rời trang mà chưa lưu.




Nhiệm vụ 7.2: Quản lý Video cá nhân
Mục tiêu:
Chức năng này cho phép người tạo nội dung quản lý toàn bộ kho video của mình trên nền tảng. Người dùng có thể đăng tải video mới, chỉnh sửa thông tin của các video đã đăng và loại bỏ những video không còn phù hợp.

Về mô hình tư duy người dùng:
Người dùng hình dung kho video như một thư viện nội dung cá nhân. Họ cảm thấy phù hợp hơn nếu nội dung được tổ chức dưới dạng danh sách có thể cuộn, tìm kiếm và thao tác trực tiếp lên từng mục - tương tự như cách quản lý tệp trên máy tính. Tuy nhiên do nhóm chưa thiết kế màn hình danh sách video trong phạm vi dự án, các luồng thao tác dưới đây được mô tả theo góc nhìn hành động người dùng mà không phụ thuộc vào giao diện danh sách cụ thể.

Các nhiệm vụ con:
1. Tải video lên kênh
2. Sửa thông tin video
3. Xóa video




























Nhiệm vụ 7.2.1: Tải video lên kênh
Mục tiêu: 
Người tạo nội dung đăng tải một video mới lên kênh cá nhân để chia sẻ với cộng đồng người xem. Trong quá trình đăng tải, người dùng cung cấp các thông tin mô tả cần thiết giúp hệ thống phân loại và hiển thị video đúng đối tượng.

Đầu vào: 
Tệp video do người dùng lựa chọn từ thiết bị cá nhân; tiêu đề video; mô tả video; ảnh thumbnail; quyền hiển thị.

Tiền điều kiện: 
Người dùng đã đăng nhập vào hệ thống và sở hữu một kênh cá nhân hợp lệ. Thiết bị có kết nối Internet ổn định và tệp video đáp ứng các yêu cầu định dạng của hệ thống.

Hậu điều kiện: 
Video được lưu trữ thành công trên hệ thống. Người xem có thể truy cập video theo quyền hiển thị đã được thiết lập.

Phân rã nhiệm vụ theo HTA:
0.  Tải video lên kênh
1. Truy cập chức năng tải video.
2. Chọn tệp video từ thiết bị.
2.1. Mở hộp thoại chọn tệp.
2.2. Chọn video cần tải lên.
2.3. Hệ thống kiểm tra định dạng (mp4, mov, avi,...) và dung lượng tệp.
2.4. [Ngoại lệ] Tệp sai định dạng hoặc vượt dung lượng cho phép → hiển thị thông báo lỗi cụ thể, yêu cầu chọn lại tệp khác.
3. Nhập thông tin mô tả video.
3.1. Nhập tiêu đề video - bắt buộc, không được để trống, không vượt quá 100 ký tự.
3.2. [Ngoại lệ] Tiêu đề để trống hoặc vượt giới hạn ký tự → hệ thống hiển thị cảnh báo, chặn đăng tải.
3.3. Nhập mô tả video - không bắt buộc.
3.4. Tải ảnh thumbnail - không bắt buộc; nếu không cung cấp, hệ thống tự sinh thumbnail từ video; nếu cung cấp, ảnh phải đúng định dạng jpg/png và không vượt kích thước cho phép.
3.5. [Ngoại lệ] Ảnh thumbnail sai định dạng hoặc quá kích thước → hệ thống hiển thị cảnh báo, yêu cầu chọn lại.
3.6. Thiết lập quyền hiển thị - bắt buộc chọn một trong ba: Công khai (hiển thị với tất cả người xem), Riêng tư (chỉ chủ kênh xem được).


4. Xác nhận đăng tải.
4.1. Nhấn nút "Đăng tải".
4.2. Hệ thống kiểm tra validate toàn bộ: tiêu đề không trống, quyền hiển thị đã chọn, thumbnail hợp lệ nếu có.
4.3. [Ngoại lệ] Còn trường bắt buộc chưa hợp lệ → hệ thống làm nổi bật các trường lỗi, không tiến hành tải lên.
4.4. Hệ thống tiến hành tải tệp lên và hiển thị tiến trình xử lý.
4.5. [Ngoại lệ] Mất kết nối trong quá trình tải → hệ thống hiển thị thông báo lỗi, cho phép thử lại.
5. Hoàn tất.
5.1. Hệ thống hiển thị thông báo tải lên thành công.

Kế hoạch:
Kế hoạch 0: Thực hiện tuần tự 1 → 2 → 3 → 4 → 5.
Nếu tệp không hợp lệ tại bước 2.4, quay lại bước 2 để chọn tệp khác trước khi tiếp tục.
Tại bước 3, các mục 3.1 và 3.6 là bắt buộc. Các mục 3.3 và 3.4 là tùy chọn và có thể bỏ qua. Người dùng có thể nhập các mục trong bước 3 theo thứ tự bất kỳ.
Nếu validate thất bại tại bước 4.3, quay lại bước 3 để bổ sung hoặc sửa các trường lỗi trước khi nhấn đăng tải lại.
Nếu mất kết nối tại bước 4.5, người dùng có thể thử lại từ bước 4.1 mà không cần chọn lại tệp hay nhập lại thông tin.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng:
Đây là nhiệm vụ có tần suất sử dụng trung bình đến cao đối với người tạo nội dung. Những kênh hoạt động thường xuyên có thể thực hiện nhiệm vụ này hàng ngày hoặc nhiều lần trong tuần.
Về ràng buộc thời gian:
Quá trình tải lên có thể kéo dài tùy thuộc vào kích thước video và tốc độ mạng. Tuy nhiên hệ thống cần phản hồi tức thời khi người dùng chọn tệp, đồng thời hiển thị tiến trình tải lên rõ ràng để giảm cảm giác chờ đợi.
Về mô hình tư duy người dùng:
Người dùng hình dung việc tải video tương tự như quá trình tải tệp lên các dịch vụ lưu trữ trực tuyến. Họ mong muốn quy trình đơn giản, tuần tự và có hướng dẫn rõ ràng từng bước. Các thông tin quan trọng như tiêu đề, thumbnail và trạng thái tải lên cần được phản hồi rõ ràng để người dùng dễ kiểm soát.







Nhiệm vụ 7.2.2: Sửa thông tin video
Mục tiêu:
Người tạo nội dung cập nhật hoặc điều chỉnh các thông tin của video đã đăng nhằm cải thiện khả năng tiếp cận người xem hoặc khắc phục các sai sót trong quá trình đăng tải trước đó.

Đầu vào:
Thông tin mới của video bao gồm tiêu đề, mô tả, thumbnail, quyền hiển thị.

Tiền điều kiện:
Người dùng đã đăng nhập và video cần chỉnh sửa thuộc quyền quản lý của kênh cá nhân.

Hậu điều kiện:
Thông tin video được cập nhật thành công và hiển thị theo nội dung mới trên hệ thống.

Phân rã nhiệm vụ theo HTA:
0.  Sửa thông tin video
1. Truy cập trang quản lý video và chọn video cần chỉnh sửa.
1.1. Tìm và chọn chức năng "Sửa" trên video mục tiêu.
2. Chỉnh sửa tiêu đề.
2.1. Xóa hoặc chỉnh sửa nội dung tiêu đề hiện tại.
2.2. [Ngoại lệ] Tiêu đề bị xóa trắng hoặc vượt 100 ký tự → hệ thống hiển thị cảnh báo, chặn lưu.
3. Chỉnh sửa mô tả.
3.1. Cập nhật nội dung mô tả — có thể để trống.
4. Thay đổi thumbnail.
4.1. Chọn tệp ảnh mới từ thiết bị.
4.2. [Ngoại lệ] Ảnh sai định dạng hoặc quá kích thước → hiển thị cảnh báo, yêu cầu chọn lại.
5. Điều chỉnh quyền hiển thị.
5.1. Chọn lại một trong ba quyền: Công khai, Không công khai, Riêng tư.
6. Lưu thay đổi.
6.1. Nhấn nút "Lưu".
6.2. Hệ thống kiểm tra validate: tiêu đề không trống, thumbnail hợp lệ nếu có thay đổi.
6.3. [Ngoại lệ] Còn lỗi validate → làm nổi bật trường lỗi, không thực hiện lưu.
6.4. Lưu thành công → hiển thị thông báo cập nhật thành công.




Kế hoạch:
Kế hoạch 0: Thực hiện bước 1 trước. Sau đó các bước 2, 3, 4, 5 có thể thực hiện theo bất kỳ thứ tự nào và không bắt buộc phải thực hiện tất cả - người dùng chỉ chỉnh sửa những trường muốn thay đổi, ngoại trừ tiêu đề luôn phải có giá trị hợp lệ. Sau khi hoàn tất, thực hiện bước 6 để lưu.
Nếu validate thất bại tại bước 6.3, quay lại trường lỗi tương ứng để sửa trước khi lưu lại.

Đặc trưng nhiệm vụ:
Về tần suất sử dụng:
Đây là nhiệm vụ có tần suất sử dụng trung bình. Người tạo nội dung thường chỉnh sửa video sau khi phát hiện lỗi chính tả, thay đổi thumbnail hoặc tối ưu tiêu đề để tăng khả năng tiếp cận.
Về ràng buộc thời gian:
Các thay đổi cần được lưu và phản ánh gần như ngay lập tức sau khi người dùng xác nhận. Việc cập nhật chậm có thể khiến người dùng nghi ngờ rằng thao tác chưa được thực hiện thành công.
Về mô hình tư duy người dùng:
Người dùng xem chức năng này giống như chỉnh sửa một bài viết đã đăng. Họ kỳ vọng có thể thay đổi thông tin bất kỳ lúc nào mà không ảnh hưởng đến nội dung video gốc. Các trường chỉnh sửa cần quen thuộc và dễ nhận biết.

























Nhiệm vụ 7.2.3: Xóa video
Mục tiêu: 
Người tạo nội dung loại bỏ một video khỏi kênh khi video không còn phù hợp, vi phạm chính sách nội bộ của kênh hoặc không muốn tiếp tục công khai với người xem.

Đầu vào: 
Yêu cầu xóa video từ người dùng.

Tiền điều kiện:
Người dùng đã đăng nhập và video cần xóa thuộc quyền quản lý của kênh cá nhân.

Hậu điều kiện:
Video bị xóa vĩnh viễn khỏi hệ thống và không còn xuất hiện trong kết quả tìm kiếm của người xem.

Phân rã nhiệm vụ theo HTA:
0.  Xóa video
1. Truy cập trang quản lý video và chọn video cần xóa.
1.1. Tìm và chọn chức năng "Xóa" trên video mục tiêu.
2. Xác nhận hành động xóa.
2.1. Hệ thống hiển thị xác nhận có nội dung cảnh báo rằng hành động xóa là vĩnh viễn và không thể hoàn tác.
2.2. Người dùng đọc thông báo và đưa ra quyết định.
2.3a. Người dùng nhấn "Xác nhận xóa" → chuyển sang bước 3.
2.3b. [Ngoại lệ] Người dùng nhấn "Hủy" → đóng hộp thoại, video không bị xóa, kết thúc nhiệm vụ.
3. Hệ thống thực hiện xóa video.
4. Hoàn tất.
4.1. Hệ thống hiển thị thông báo xóa thành công.

Kế hoạch:
Kế hoạch 0: Thực hiện tuần tự 1 → 2 → 3 → 4.
Tại bước 2, nếu người dùng chọn "Hủy" (bước 2.3b), toàn bộ luồng kết thúc ngay tại đó và không có thay đổi nào được thực hiện.





Đặc trưng nhiệm vụ:
Về tần suất sử dụng:
Đây là nhiệm vụ có tần suất sử dụng thấp vì người tạo nội dung thường ưu tiên chỉnh sửa hoặc ẩn video thay vì xóa hoàn toàn.
Về ràng buộc thời gian:
Thao tác xóa cần được xử lý nhanh để tránh làm gián đoạn công việc quản lý. Tuy nhiên hệ thống phải ưu tiên tính chính xác hơn tốc độ vì đây là hành động có thể gây mất dữ liệu vĩnh viễn.
Về mô hình tư duy người dùng:
Người dùng xem việc xóa video tương tự như xóa một tệp quan trọng trên máy tính. Họ mong muốn hệ thống đưa ra cảnh báo rõ ràng trước khi thực hiện để tránh thao tác nhầm. Hộp thoại xác nhận đóng vai trò như lớp bảo vệ cuối cùng trước khi dữ liệu bị loại bỏ hoàn toàn.

































Nhiệm vụ 7.3: Xem thống kê kênh
Mục tiêu:
Chức năng Xem thống kê kênh giúp người tạo nội dung theo dõi hiệu quả hoạt động của kênh thông qua các chỉ số như lượt xem, thời gian xem, tương tác và số lượng người đăng ký theo từng giai đoạn.

Đầu vào:
Khoảng thời gian thống kê do người dùng lựa chọn và dữ liệu hoạt động của kênh.

Tiền điều kiện:
Người dùng đã đăng nhập và kênh đã có dữ liệu hoạt động.

Hậu điều kiện:
Hệ thống hiển thị các biểu đồ và số liệu thống kê để người dùng đánh giá hiệu quả phát triển của kênh.

Phân rã nhiệm vụ theo HTA:
0.  Xem thống kê kênh
1. Truy cập trang Thống kê.
2. Xem dữ liệu thống kê theo bộ lọc thời gian mặc định (30 ngày gần nhất).
2.1. Xem tổng lượt xem trong kỳ.
2.2. Xem tổng thời gian xem trong kỳ.
2.3. Xem số người đăng ký mới trong kỳ.
2.4. Xem số video mới đã đăng trong kỳ.
2.5. Xem biểu đồ lượt xem theo thời gian.
2.6. Xem danh sách top video nhiều lượt xem nhất trong kỳ.
3. [Luồng phụ] Thay đổi bộ lọc thời gian.
3.1. Người dùng chọn khoảng thời gian khác (7 ngày / 30 ngày).
3.2. Hệ thống tải lại và cập nhật toàn bộ số liệu và biểu đồ theo khoảng thời gian vừa chọn.
3.3. [Ngoại lệ] Không có dữ liệu trong khoảng thời gian được chọn → hệ thống hiển thị thông báo "Không có dữ liệu trong khoảng thời gian này".

Kế hoạch:
Kế hoạch 0: Thực hiện bước 1, sau đó hệ thống tự động thực hiện bước 2 với bộ lọc mặc định 30 ngày - người dùng không cần thao tác thêm để xem dữ liệu ban đầu.
Bước 3 là luồng phụ tùy chọn, người dùng có thể thực hiện bất kỳ lúc nào sau bước 1 để lọc lại dữ liệu theo khoảng thời gian khác. Sau khi thực hiện bước 3, toàn bộ nội dung ở bước 2 được cập nhật theo bộ lọc mới.


Đặc trưng nhiệm vụ:
Về tần suất sử dụng:
Chức năng này có tần suất sử dụng trung bình. Người tạo nội dung thường truy cập sau khi đăng video mới hoặc theo dõi sự phát triển của kênh theo tuần, tháng hoặc quý.
Về ràng buộc thời gian:
Dữ liệu thống kê cần được cập nhật kịp thời và hiển thị nhanh để đảm bảo tính chính xác trong việc đánh giá hiệu suất hoạt động.
Về mô hình tư duy người dùng:
Người dùng xem trang thống kê như một "dashboard điều khiển". Họ mong muốn nhìn thấy các chỉ số quan trọng dưới dạng trực quan, dễ hiểu và có thể nhanh chóng nhận biết xu hướng tăng trưởng hoặc suy giảm của kênh.
